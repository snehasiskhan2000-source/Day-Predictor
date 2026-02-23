// ... Matrix background code stays the same ...

function switchFrame(frameId) {
    document.querySelectorAll('.frame').forEach(f => f.classList.remove('active'));
    document.getElementById(frameId).classList.add('active');
}

const steps = [
    "Connecting To Jadoo...", "Consulting To Elon Mask...", 
    "Contacting To NASA Satellites...", "Calling To Stephen Hawking...",
    "Running DNA Analysis...", "Decrypting Space-Time...",
    "Contacting To Hubble Telescope...", "Getting The Info From The Sun...",
    "Finalising Prediction..."
];

async function checkDate(userChoice) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const realTomorrow = days[(new Date().getDay() + 1) % 7];
    const isCorrect = userChoice === realTomorrow;

    switchFrame('loading-ui');

    for (let i = 0; i < steps.length; i++) {
        document.getElementById('loading-text').innerText = steps[i];
        document.getElementById('fill').style.width = ((i + 1) / steps.length) * 100 + "%";
        await new Promise(res => setTimeout(res, 2000)); // Fixed 2s Delay
    }

    showResult(isCorrect, realTomorrow);
}

function showResult(isCorrect, realTomorrow) {
    switchFrame('result-ui');
    
    const header = document.getElementById('result-header');
    const quote = document.getElementById('funny-quote');
    const desc = document.getElementById('result-desc');

    if (isCorrect) {
        header.innerText = "YOU'RE RIGHT!";
        header.style.color = "#00d2ff";
        desc.innerHTML = `Yes, tomorrow is <b style="color:#00d2ff">${realTomorrow}</b>`;
        quote.innerText = "Finally you decoded the Date.";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        header.innerText = "YOU'RE STUPID!";
        header.style.color = "#ff4757";
        desc.innerHTML = `Actually, tomorrow is <b>${realTomorrow}</b>`;
        quote.innerText = "Error 404: Brain Not Found.";
    }
}
