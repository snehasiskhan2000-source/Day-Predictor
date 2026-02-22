const steps = [
    "Connecting To Jadoo...",
    "Consulting To Elon Mask...",
    "Contacting To NASA Satellites...",
    "Calling To Stephen Hawking...",
    "Running DNA Analysis...",
    "Decrypting Space-Time...",
    "Contacting To Hubble Telescope...",
    "Getting The Info From The Sun...",
    "Finalising Prediction..."
];

const funnyInsults = [
    "Error 404: Brain Not Found.",
    "Calculated IQ: Room Temperature.",
    "Did you hit your head today?",
    "My AI is laughing at you right now."
];

async function checkDate(userChoice) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const realTomorrow = days[(today + 1) % 7];
    const isCorrect = userChoice === realTomorrow;

    document.getElementById('selection-ui').classList.add('hidden');
    document.getElementById('loading-ui').classList.remove('hidden');

    const fill = document.getElementById('fill');
    const text = document.getElementById('loading-text');

    // Loop through steps with 2s delay
    for (let i = 0; i < steps.length; i++) {
        text.innerText = steps[i];
        fill.style.width = ((i + 1) / steps.length) * 100 + "%";
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    showResult(isCorrect, realTomorrow);
}

function showResult(isCorrect, realTomorrow) {
    document.getElementById('loading-ui').classList.add('hidden');
    const resUI = document.getElementById('result-ui');
    resUI.classList.remove('hidden');

    const header = document.getElementById('result-header');
    const icon = document.getElementById('status-icon');
    const quote = document.getElementById('funny-quote');
    const desc = document.getElementById('result-desc');
    const iqBox = document.getElementById('iq-box-id');

    if (isCorrect) {
        icon.innerText = "✅";
        header.innerText = "YOU'RE RIGHT!";
        header.style.color = "#00d2ff";
        desc.innerHTML = `Yes, tomorrow is <span style="color:#00d2ff; font-weight:800">${realTomorrow}</span>`;
        quote.innerText = "Finally you decoded the Date.";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        icon.innerText = "❌";
        header.innerText = "YOU'RE STUPID!";
        header.style.color = "#ef4444";
        desc.innerHTML = `Actually, tomorrow is <b>${realTomorrow}</b>`;
        quote.innerText = funnyInsults[Math.floor(Math.random() * funnyInsults.length)];
        iqBox.innerText = "System Analysis: IQ too low to measure.";
    }
}
