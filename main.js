const img1 = document.querySelector(".img1")
const button1 = document.querySelector(".button1")


button1.addEventListener("click", () => {
    if (img1.src.includes("bulb-on.png")) {
        img1.src = "bulb-off.png"
        button1.textContent = "TURN OFF"
        button1.style.background = "black "
        button1.style.color = "white"
    } else if (img1.src.includes("bulb-off.png")) {
        img1.src = "bulb-on.png"
        button1.textContent = "TURN ON"
        button1.style.background = "white"
        button1.style.color = "black"

    }

})