let container = document.querySelector(".container");
let body = document.querySelector("body");
let button = document.createElement("button");
button.textContent = "Click me!"
body.appendChild(button);

container.style.gridTemplateColumns = `repeat(${1}, 1fr)`;
container.style.gridTemplateRows = `repeat(${1}, 1fr)`;


for (let i = 0; i < 100 * 100; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
} 

button.addEventListener("click", () => {
    let n = prompt("Please type scetch size (1-100)");
    if (n > 100 || n < 1) {
        alert("Number must be within 100!");
        return;
    }
    grids.forEach((grids) => {
        grids.classList.remove("hover");
    })
     container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
     container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
})

let grids = document.querySelectorAll(".grid");

window.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        e.target.classList.add("hover");
    }
})




