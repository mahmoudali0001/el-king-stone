new WOW().init();

// ---------------------------------------------------- Start Catching Elements ------------------------------------------------- //
let loadingElement = document.querySelector(".loading-parent");

let navBarBtn = document.querySelector(".navbar-toggler");

let navBarMenu = document.querySelector("#navbarSupportedContent");

let navbarMenuBtns = document.querySelectorAll(".nav-item");

let exitMenu = document.querySelector(".exit-menu");

let navbarOverlay = document.querySelector(".navbar .overlay");

let callUsBtns = document.querySelectorAll(".call-us a");

let callUsBtnToggle = document.querySelector(".call-us .message-btn");

let callUsBtnToggleIcon = document.querySelector(".call-us .message-btn i");

let navbar = document.querySelector(".navbar");

// ---------------------------------------------------- End Catching Elements ------------------------------------------------- //

// ------------------------------------- Start Loading Element  ------------------------------ //
function handleLoadingPage() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingElement.style.display = "none";
    }, 1500);
  });
}

handleLoadingPage();
// ------------------------------------- End Loading Element  ------------------------------ //

// ------------------------------------ Start NavBar toggle class list ------------------------- ///
function handleNavBarMenu() {
  navBarBtn.addEventListener("click", () => {
    navbarOverlay.classList.add("show");
    navbarMenuBtns.forEach((el) => {
      el.classList.add("show-links");
    });
  });

  navbarOverlay.addEventListener("click", () => {
    navBarMenu.classList.remove("show");
    navbarOverlay.classList.remove("show");
    navbarMenuBtns.forEach((el) => {
      el.classList.remove("show-links");
    });
  });

  exitMenu.addEventListener("click", () => {
    navBarMenu.classList.remove("show");
    navbarOverlay.classList.remove("show");
    navbarMenuBtns.forEach((el) => {
      el.classList.remove("show-links");
    });
  });
}

handleNavBarMenu();
// ------------------------------------ End NavBar toggle class list ------------------------- ///

// ---------------------------------------- Start Nav Bar add Class when scroll ------------------------------ //
function handleNavBarBgOnScroll() {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 82) {
      navbar.classList.remove("bg-white");
      navbar.classList.add("bg-sliver");
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("bg-sliver");
      navbar.classList.add("bg-white");
      navbar.classList.remove("shadow");
    }
  });
}
handleNavBarBgOnScroll();
// ---------------------------------------- End Nav Bar add Class when scroll ------------------------------ //

// ------------------------------------------------------ Start callUsBtnToggle Click  ---------------------------------- //
function handleCallUsButton() {
  callUsBtnToggle.addEventListener("click", function () {
    callUsBtns.forEach((el) => {
      el.classList.toggle("show");
    });

    callUsBtnToggle.classList.toggle("show");
    callUsBtnToggleIcon.classList.toggle("fa-envelope");
    callUsBtnToggleIcon.classList.toggle("fa-xmark");
  });
}

handleCallUsButton();
// ------------------------------------------------------ Start callUsBtnToggle Click  ---------------------------------- //

export {
  handleNavBarMenu,
  handleCallUsButton,
  handleLoadingPage,
  handleNavBarBgOnScroll,
};
