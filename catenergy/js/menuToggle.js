var menuToggle = document.querySelector(".main-nav");
var toggleButton = document.querySelector(".menu-button");
var menuIcon = document.querySelector('.menu-button__bar')

if (menuToggle.classList.contains('main-nav--no-js')){
        menuToggle.classList.remove('main-nav--no-js');
};

toggleButton.addEventListener("click", function (evt) {
    evt.preventDefault;
    menuIcon.classList.toggle("menu-button__bar--active");
    if (menuIcon.classList.contains("menu-button__bar--active")){
        menuToggle.classList.remove("main-nav--closed");
        menuToggle.classList.add("main-nav--opened");
    } else {
        menuToggle.classList.remove("main-nav--opened");
        menuToggle.classList.add("main-nav--closed");
    }
});
