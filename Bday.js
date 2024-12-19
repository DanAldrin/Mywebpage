// Select elements
const card = document.getElementById("birthdayCard");
const openCardBtn = document.getElementById("openCard");
const closeCardBtn = document.getElementById("closeCard");

// Open card
openCardBtn.addEventListener("click", () => {
    card.style.transform = "rotateY(180deg)";
    launchConfetti();
});

// Close card
closeCardBtn.addEventListener("click", () => {
    card.style.transform = "rotateY(0deg)";
});

// Confetti function
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}