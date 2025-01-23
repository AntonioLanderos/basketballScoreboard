let homeScoreboard = document.getElementById("home-score");
let homePlusThree_btn = document.getElementById("home-plus3");
let homePlusTwo_btn = document.getElementById("home-plus2");
let homePlusOne_btn = document.getElementById("home-plus1");
let homeReset_btn = document.getElementById("home-reset");

let guestScoreboard = document.getElementById("guest-score");
let guestPlusThree_btn = document.getElementById("guest-plus3");
let guestPlusTwo_btn = document.getElementById("guest-plus2");
let guestPlusOne_btn = document.getElementById("guest-plus1");
let guestReset_btn = document.getElementById("guest-reset");


homePlusOne_btn.addEventListener("click", function() {
    homeScoreboard.textContent++;
});

homePlusTwo_btn.addEventListener("click", function() {
    homeScoreboard.innerHTML = parseInt(homeScoreboard.innerHTML) + 2;
});

homePlusThree_btn.addEventListener("click", function() {
    homeScoreboard.innerHTML = parseInt(homeScoreboard.innerHTML) + 3;
});

homeReset_btn.addEventListener("click", function() {
    homeScoreboard.textContent = 0;
});

guestPlusOne_btn.addEventListener("click", function() {
    guestScoreboard.textContent++;
});

guestPlusTwo_btn.addEventListener("click", function() {
    guestScoreboard.innerHTML = parseInt(guestScoreboard.innerHTML) + 2;
});

guestPlusThree_btn.addEventListener("click", function() {
    guestScoreboard.innerHTML = parseInt(guestScoreboard.innerHTML) + 3;
});

guestReset_btn.addEventListener("click", function() {
    guestScoreboard.textContent = 0;
});