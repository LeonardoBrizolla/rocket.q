export default function Modal() {
  const modalWarapper = document.querySelector(".modal-wrapper");
  const cancelButton = document.querySelector(".button.cancel");

  cancelButton.addEventListener("click", close);

  function open() {
    // ADD CLASS ACTIVE
    modalWarapper.classList.add("active");
  }
  function close() {
    // DELETE CLASS ACTIVE
    modalWarapper.classList.remove("active");
  }

  return {
    open,
    close,
  };
}
