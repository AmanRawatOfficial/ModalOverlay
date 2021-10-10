'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i=0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", openModal);
}
/* Close the overlay and modal on close button and clicking outside*/
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/* Close the overlay and modal on 'escape' key press*/
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})