document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card[data-modal-id]");
    const modals = document.querySelectorAll(".project-modal");
  
    cards.forEach(card => {
      const id = card.getAttribute("data-modal-id");
      const modal = document.getElementById(`modal-${id}`);
      const closeBtn = modal.querySelector(".close-btn");
  
      card.addEventListener("click", () => {
        modal.classList.add("active");
      });
  
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
      });
  
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
        }
      });
    });
  });