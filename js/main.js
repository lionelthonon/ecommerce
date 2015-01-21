function parallax() {
    
    var banner = document.getElementsByName("bckg-parallax");

    banner[0].style.backgroundPosition = '0 '+(-window.pageYOffset/-2)+'px';
}
window.addEventListener("scroll", parallax, false);