const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".js-backdrop");

openModalBtn.addEventListener("click", onModelOpen);

function onModelOpen() {
  window.addEventListener("keydown", onEscClick);
  document.body.classList.add("show-modal");
}

closeModalBtn.addEventListener("click", onModalClose);

function onModalClose() {
  window.removeEventListener("keydown", onEscClick);
  document.body.classList.remove("show-modal");
}

backdrop.addEventListener("click", onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  }
}

function onEscClick(event) {
  const ESK_KEY_CODE = "Escape";
  if (event.code === ESK_KEY_CODE) {
    onModalClose();
  }
}
