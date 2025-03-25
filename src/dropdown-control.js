function dropController(dropBox, dropContent) {
    dropBox.addEventListener("click", (event) => {
        event.stopPropagation();
        dropContent.classList.toggle("visible");
    });

    dropContent.addEventListener("click", (event) => {
        event.stopPropagation(); 
        if (event.target.tagName === "LI") {
            dropBox.textContent = event.target.textContent;
            dropContent.classList.remove("visible");
        }
    });

    document.addEventListener("click", () => {
        dropContent.classList.remove("visible");
    });
}

export { dropController };