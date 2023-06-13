export const toggleModal = (event) => {
    const modal = document.getElementById(event.target.dataset.target);
    if (modal.hasAttribute("open")) {
      modal.removeAttribute("open");
    } else {
      modal.toggleAttribute("open");
    }
  };
