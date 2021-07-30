const iniciaModal = (modalClass) => {
  const modal = document.querySelector(modalClass);
  modal.classList.add("mostrar-modal");

  modal.addEventListener("click", (event) => {
    if (
      event.target.className === "cancel" ||
      event.target.className === "modal mostrar-modal"
    ) {
      modal.classList.remove("mostrar-modal");
    }
  });
};

const btnDelete = document.querySelector(".btn-delete");
btnDelete.onclick = () => iniciaModal(".modal");
