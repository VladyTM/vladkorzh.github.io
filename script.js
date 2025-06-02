document.addEventListener("DOMContentLoaded", () => {
    const cipqCard = document.querySelector('[data-modal-id="cipq"]');
    const cipqModal = document.getElementById("modal-cipq");
    const closeBtn = cipqModal.querySelector(".close-btn");
  
    cipqCard.addEventListener("click", () => {
      cipqModal.classList.add("active");
    });
  
    closeBtn.addEventListener("click", () => {
      cipqModal.classList.remove("active");
    });
  
    cipqModal.addEventListener("click", (e) => {
      if (e.target === cipqModal) {
        cipqModal.classList.remove("active");
      }
    });
  });