let header = document.querySelector("header")
let menuIcon = document.querySelector("#hamburger")
let crossIcon = document.querySelector("#cross")
let divIcon = document.querySelector("#mobile-nav-icon")
let nav = document.querySelector("nav")
let main = document.querySelector("main")

divIcon.addEventListener("click", function(){
    if(menuIcon.style.display !== "none"){
        menuIcon.style.display = "none"
        crossIcon.style.display = "block"
        nav.style.display = "block"
    } else {
        menuIcon.style.display = "block"
        crossIcon.style.display = "none"
        nav.style.display = "none"
    }
})

main.addEventListener("click", function(){
    if(menuIcon.style.display === "none"){
        menuIcon.style.display = "block"
        crossIcon.style.display = "none"
        nav.style.display = "none"
    }
})