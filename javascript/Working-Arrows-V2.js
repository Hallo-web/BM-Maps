document.querySelector(".left-arrow").addEventListener("click", () => slideColumns("left"));
document.querySelector(".right-arrow").addEventListener("click", () => slideColumns("right"));

function slideColumns(direction) {
    const container = document.querySelector(".container");
    const columns = document.querySelectorALL(".column");

    if (direction === "left") {
        container.appendChild(columns[0]);
    } else {
        container.prepend(columns[columns.length - 1]);
    }
}