import SimpleParallax from "../node_modules/simple-parallax-js/vanilla";



document.addEventListener('DOMContentLoaded', function() {
var images = document.querySelectorAll('img');
new SimpleParallax(images);
});