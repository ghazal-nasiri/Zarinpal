// hamburger menu
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
// offcanvas hamburger menu
const offcanvasHamburgerMenu = document.querySelector(".offcanvas-hamburger-menu");
let openHamburgerMenu = false;
// header
const header = document.querySelector("header");
// open and close offcanvas hamburger menu
hamburgerMenuIcon.addEventListener("click",() => {
        hamburgerMenuIcon.classList.toggle("open-hamburger-menu");

        openHamburgerMenu = hamburgerMenuIcon.classList.contains("open-hamburger-menu") ? true : false;

        if (openHamburgerMenu) {
            offcanvasHamburgerMenu.classList.add("open-offcanvas-hamburger-menu");
        }
        else {
            offcanvasHamburgerMenu.classList.remove("open-offcanvas-hamburger-menu");
        }

    })
// border header
    addEventListener("scroll", () => {
        if(scrollY > 56){
            header.style = "border-bottom: 1px solid rgba(0, 0, 0, 0.1)";
        }
        else{
            header.style = "border-bottom: none";

        }


    });




