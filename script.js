document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "💬 'Живу, чтобы СУДЬБА! СУДЬБА! СУДЬБА! СУДЬБА! СУДЬБА! СУДЬБА! СУДЬБА! СУДЬБА!'",
      "👾 'СУДЬБА — это магия'",
      "🌈 'Хочу сайт с СУДЬБА! СУДЬБА! СУДЬБА! '",
      "🔥 'Пишу романы ночью'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Аниме": "Было дело...",
      "Геймминг": "Иногда даже не инди-игры с днища интернета.",
      "Чтиво": "Криминальное.",
      "Недо-programist": "Настолько programist, что ломаю рабочие коды."
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  