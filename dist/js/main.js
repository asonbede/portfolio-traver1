//Select objects from the document object model dom
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
// const bgImage = document.querySelector("#bg-image");
// console.log(bgImage, "++--");
// const bgImagearray = [
//   "url(../images/background0.jpg)",
//   "url(../images/background1.jpg)",
//   "url(../images/background2.jpg)",
// ];
// const randomNum = Math.floor(Math.random() * bgImagearray.length);
// document.body.background = bgImagearray[randomNum];
// bgImage.backgroundColor = "#444";
// bgImage.backgroundAttachment = "fixed";
// bgImage.backgroundSize = "cover";

//set initial menu state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}
