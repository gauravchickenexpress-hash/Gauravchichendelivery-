function orderNow(product) {

    let count = localStorage.getItem("orderCount") || 0;
    count++;
    localStorage.setItem("orderCount", count);

    let phone = "917579414972";
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
/* ADMIN DASHBOARD LOCK */

const ADMIN_PASSWORD = "gaurav123"; // 🔴 apna secret password

function openAdmin() {
    let pass = prompt("Enter Admin Password");

    if (pass === ADMIN_PASSWORD) {
        let count = localStorage.getItem("orderCount") || 0;
        document.getElementById("adminOrderCount").innerText = count;
        document.getElementById("adminDashboard").style.display = "block";
    } else {
        alert("❌ Wrong Password!");
    }
}

function closeAdmin() {
    document.getElementById("adminDashboard").style.display = "none";
}
