let time = 899;

const countdown = document.getElementById('countdown');

setInterval(() => {

let minutes = Math.floor(time / 60);
let seconds = time % 60;

seconds = seconds < 10 ? '0' + seconds : seconds;

countdown.innerHTML = `${minutes}:${seconds}`;

if(time > 0){
    time--;
}

}, 1000);


// Fake live activity popup

const names = [
    "John",
    "Michael",
    "Ashley",
    "Jessica",
    "David",
    "Daniel",
    "Emily",
    "Sarah",
    "Chris",
    "Matthew"
];

const states = [
    "Texas",
    "California",
    "Florida",
    "New York",
    "Ohio",
    "Nevada",
    "Arizona",
    "Georgia"
];

function showPopup(){

    const popup = document.createElement("div");

    popup.className = "live-popup";

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];

    popup.innerHTML = `
        🔥 ${randomName} from ${randomState} just entered the giveaway
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
    }, 100);

    setTimeout(() => {
        popup.classList.remove("show");

        setTimeout(() => {
            popup.remove();
        }, 500);

    }, 4000);

}

setInterval(showPopup, 7000);
