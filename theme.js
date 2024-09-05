
// Alussa tarkistetaan onko väriteemaa talletettu

let savedTheme = localStorage.getItem("savedTheme")

if (savedTheme == "dark") {
    dark()
}


//---------Väriteeman muuttamisfunktiot------------------------------

function dark() {
    let page = document.getElementById("page")

    page.style.backgroundColor = "black";
    page.style.color = "silver";

    localStorage.setItem("savedTheme", "dark")
}


function light() {
    let page = document.getElementById("page")

    page.style.backgroundColor = "white";
    page.style.color = "black";

    localStorage.setItem("savedTheme", "light")
}