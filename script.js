const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "010101";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00d2ff";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

const steps = [
    "Connecting To Jadoo...", "Consulting To Elon Mask...", 
    "Contacting To NASA Satellites...", "Calling To Stephen Hawking...",
    "Running DNA Analysis...", "Decrypting Space-Time...",
    "Contacting To Hubble Telescope...", "Getting The Info From The Sun...",
    "Finalising Prediction..."
]; //

async function checkDate(userChoice) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const realTomorrow = days[(new Date().getDay() + 1) % 7];
    const isCorrect = userChoice === realTomorrow;

    document.getElementById('selection-ui').classList.add('hidden');
    document.getElementById('loading-ui').classList.remove('hidden');

    for (let i = 0; i < steps.length; i++) {
        document.getElementById('loading-text').innerText = steps[i];
        document.getElementById('fill').style.width = ((i + 1) / steps.length) * 100 + "%";
        await new Promise(res => setTimeout(res, 2000)); // 2-second delay
    }

    showResult(isCorrect, realTomorrow);
}

function showResult(isCorrect, realTomorrow) {
    document.getElementById('loading-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');
    
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
