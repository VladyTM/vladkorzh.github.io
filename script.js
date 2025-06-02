document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card[data-modal-id]");
  
    cards.forEach(card => {
      const id = card.getAttribute("data-modal-id");
      const modal = document.getElementById(`modal-${id}`);
      const closeBtn = modal.querySelector(".close-btn");
  
      // Open modal
      card.addEventListener("click", () => {
        modal.classList.add("active");
      });
  
      // Close when clicking the X
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
      });
  
      // Close when clicking outside modal content
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
        }
      });
    });
  });