function orderNow(product) {

    let phone = "917579414972";  
    // 👆 apna WhatsApp number yaha daalo without +

    let message = "Hello, I want to order: " + product;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
/* -------- ADVERTISEMENT SLIDER SCRIPT -------- */

let ads = [
    "ad1.jpg",
    "ad2.jpg",
    "ad3.jpg"
];

let adIndex = 0;

function changeAd() {
    adIndex++;
    if (adIndex >= ads.length) {
        adIndex = 0;
    }

    document.getElementById("adSlider").src = ads[adIndex];
}

/* change ad every 3 seconds */
setInterval(changeAd, 3000);
/* SPLASH TIMER */

setTimeout(function() {
    let splash = document.getElementById("splash");
    if(splash){
        splash.style.display = "none";
    }
}, 3000);