// JavaScript - By Abdul Waris [Orignal]
let resNav = document.getElementById("resNav")
let resBtn = document.getElementById("resBtn")
let nav = document.getElementById("nav")

const toggleNav = () => {
    if (resNav.style.display === "unset") {
        resNav.style.display = "none"
        nav.style.height = "80px"
    }
    else {
        resNav.style.display = "unset"
        nav.style.height = "410px"
    }
}