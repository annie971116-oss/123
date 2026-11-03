import { GAME_CONFIG } from '../config.js';

/**
 * 常識問答彈窗管理器 (Quiz Modal UI)
 * 負責渲染四選一常識選擇題、倒數計時條與答對/答錯即時視覺回饋
 */
export class QuizModal {
  constructor(audioSystem) {
    this.audio = audioSystem;
    this.modalEl = document.getElementById('quiz-modal');
    this.titleEl = document.getElementById('quiz-title');
    this.questionEl = document.getElementById('quiz-question');
    this.optionsContainer = document.getElementById('quiz-options');
    this.timerBar = document.getElementById('quiz-timer-bar');
    this.feedbackEl = document.getElementById('quiz-feedback');

    this.timer = null;
    this.timeLeft = 20;
    this.currentResolve = null;
    this.isAnswered = false;
  }

  /**
   * 彈出題目並等待玩家作答
   * @returns {Promise<{ correct: boolean, targetTile: Object }>}
   */
  askQuestion(question, targetTile, factionId) {
    return new Promise((resolve) => {
      this.currentResolve = resolve;
      this.isAnswered = false;
      this.timeLeft = GAME_CONFIG.QUIZ_TIME_LIMIT;

      // 填入題目標題與地盤分數
      const faction = GAME_CONFIG.FACTIONS[factionId];
      const stars = '⭐'.repeat(targetTile.difficulty);
      this.titleEl.innerHTML = `${faction.avatar} 【${faction.name}】正在搶奪 <strong>${targetTile.score} 分</strong> 地盤！ (${stars})`;
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

    // 禁用所有按鈕
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
        <p>成功佔領地盤！獲得 <strong>+${targetTile.score}</strong> 分！</p>
      `;
    } else {
      this.audio.playWrong();
      const penalty = Math.max(
        GAME_CONFIG.MIN_WRONG_PENALTY,
        Math.round(targetTile.score * GAME_CONFIG.WRONG_PENALTY_RATIO)
      );
      this.feedbackEl.className = 'quiz-feedback failure';
      const reason = isTimeout ? '⏰ 作答時間到！' : '❌ 糟糕，答案選錯了！';
      this.feedbackEl.innerHTML = `
        <strong>${reason}</strong>
        <p>倒扣 <strong>-${penalty}</strong> 分！該地盤暫時進入冷卻無法佔領！</p>
        <p class="explanation">💡 常識解說：${question.explanation}</p>
      `;
    }

    // 延遲關閉彈窗
    setTimeout(() => {
      this.modalEl.classList.add('hidden');
      if (this.currentResolve) {
        this.currentResolve({ correct: isCorrect, targetTile });
      }
    }, isCorrect ? 1300 : 2200);
  }
}
