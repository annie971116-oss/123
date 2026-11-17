import { GAME_CONFIG } from '../config.js';
import { AudioSystem } from '../core/AudioSystem.js';

/**
 * 常識問答彈窗控制器 (Quiz Modal)
 * 負責渲染四選一趣味常識題目、20 秒倒數計時進度條、即時回饋與答題結果通知
 */
export class QuizModal {
  constructor({ onTimeUp = () => {} } = {}) {
    this.onTimeUp = onTimeUp;
    this.audio = new AudioSystem();

    this.modalEl = document.getElementById('quiz-modal');
    this.titleEl = document.getElementById('quiz-title');
    this.questionEl = document.getElementById('quiz-question');
    this.optionsContainer = document.getElementById('quiz-options');
    this.feedbackEl = document.getElementById('quiz-feedback');
    this.timerBar = document.getElementById('quiz-timer-bar');

    this.timer = null;
    this.timeLeft = GAME_CONFIG.QUIZ_TIME_LIMIT;
    this.currentResolve = null;
    this.isAnswered = false;
  }

  /**
   * 彈出題目並等待使用者作答
   * @param {Object} question - 題目物件
   * @param {Object} targetTile - 目標地盤
   * @param {string} factionId - 作答玩家陣營 ('cat' | 'dog')
   * @returns {Promise<{ correct: boolean, targetTile: Object }>}
   */
  askQuestion(question, targetTile, factionId) {
    return new Promise((resolve) => {
      this.currentResolve = resolve;
      this.isAnswered = false;
      this.timeLeft = GAME_CONFIG.QUIZ_TIME_LIMIT;

      // 填入題目標題與地盤主題
      const faction = GAME_CONFIG.FACTIONS[factionId] || GAME_CONFIG.FACTIONS.cat;
      const stars = '⭐'.repeat(targetTile.difficulty || 1);
      const catIcon = targetTile.categoryIcon || '🌿';
      const catName = targetTile.categoryName || '趣味常識';

      this.titleEl.innerHTML = `${faction.avatar} 【${faction.name}】搶奪【#${targetTile.tileNumber}】號地盤 (${catIcon} ${catName}・${stars})`;
      this.questionEl.textContent = question.question;

      this.feedbackEl.className = 'quiz-feedback hidden';
      this.feedbackEl.innerHTML = '';

      // 生成四個選項按鈕
      this.optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      question.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `<span class="opt-badge">${letters[idx]}</span> <span class="opt-text">${optText}</span>`;
        btn.addEventListener('click', () => this.handleAnswer(idx, question, targetTile));
        this.optionsContainer.appendChild(btn);
      });

      // 顯示彈窗
      this.modalEl.classList.remove('hidden');

      // 啟動 20 秒倒數計時條
      this.startCountdown(question, targetTile);
    });
  }

  startCountdown(question, targetTile) {
    if (this.timer) clearInterval(this.timer);
    this.timerBar.style.width = '100%';

    const startTime = Date.now();
    const duration = GAME_CONFIG.QUIZ_TIME_LIMIT * 1000;

    this.timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.max(0, 1 - elapsed / duration);
      this.timerBar.style.width = `${progress * 100}%`;

      if (progress <= 0) {
        clearInterval(this.timer);
        this.timer = null;
        if (!this.isAnswered) {
          // 超時視為答錯
          this.handleAnswer(-1, question, targetTile, true);
        }
      }
    }, 50);
  }

  handleAnswer(chosenIndex, question, targetTile, isTimeout = false) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    const isCorrect = !isTimeout && chosenIndex === question.answerIndex;
    const buttons = this.optionsContainer.querySelectorAll('.quiz-option-btn');

    // 禁用所有按鈕並標記正誤
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === question.answerIndex) {
        btn.classList.add('correct');
      } else if (idx === chosenIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // 視覺與音效回饋
    this.feedbackEl.classList.remove('hidden');
    if (isCorrect) {
      this.audio.playCorrect();
      this.feedbackEl.className = 'quiz-feedback success';
      this.feedbackEl.innerHTML = `
        <strong>🎉 太棒了！回答正確！</strong>
        <p>成功佔領【#${targetTile.tileNumber}】號地盤！朝稱霸 50 格更進一步！</p>
      `;
    } else {
      this.audio.playWrong();
      this.feedbackEl.className = 'quiz-feedback failure';
      const reason = isTimeout ? '⏰ 作答時間到！' : '❌ 糟糕，答案選錯了！';
      this.feedbackEl.innerHTML = `
        <strong>${reason}</strong>
        <p>佔領失敗！該地盤進入 15 秒冷卻！</p>
        <p class="explanation">💡 趣味常識：${question.explanation}</p>
      `;
    }

    // 延遲關閉彈窗
    setTimeout(() => {
      this.modalEl.classList.add('hidden');
      if (this.currentResolve) {
        this.currentResolve({ correct: isCorrect, targetTile });
        this.currentResolve = null;
      }
    }, isCorrect ? 1300 : 2200);
  }

  /**
   * 強制關閉作答彈窗 (用於提前結束本局對決)
   */
  close() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isAnswered = true;
    if (this.modalEl) {
      this.modalEl.classList.add('hidden');
    }
    if (this.currentResolve) {
      this.currentResolve({ correct: false, targetTile: null });
      this.currentResolve = null;
    }
  }
}
