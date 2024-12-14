document.addEventListener("teeinblue-event-component-injected", function () {
  const elementToMove = document.querySelector("#open-guidelines-modal");
  const insertAfterElement = document.querySelector("#teeFormInputs");
  const theFirstChild = insertAfterElement.firstChild;
  if (elementToMove && insertAfterElement) {
    insertAfterElement.insertBefore(elementToMove, theFirstChild);
  }
});

document.addEventListener("DOMContentLoaded", function () {});

