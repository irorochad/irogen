var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");


backdrop.addEventListener('click' , function() {
    mobileNav.style.display = "none";
    backdrop.style.display = "none";
});

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = "block";
    backdrop.style.display = "block";
})


new TypeIt(".info-main h1", {
    strings: "We're Here To Help Grow Your Business",
    speed: 75,
    loop: true
    }).go();