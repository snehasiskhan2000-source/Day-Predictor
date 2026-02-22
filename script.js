let userChoice = "";
const statusTexts = [
    "Contacting NASA Satellites...",
    "Consulting Elon Musk's Brain...",
    "Running DNA Analysis...",
    "Decrypting Space-Time Continuum...",
    "Asking a nearby Potato...",
    "Finalizing Prediction..."
];

function selectDay(day) {
    userChoice = day;
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    
    const btn = document.getElementById('predict-btn');
    btn.classList.add('enabled');
    btn.disabled = false;
}

async function startPrediction() {
    document.getElementById('selection-screen').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');

    const bar = document.getElementById('progress-bar');
    const status = document.getElementById('loading-status');

    for (let i = 0; i < statusTexts.length; i++) {
        status.innerText = statusTexts[i];
        bar.style.width = ((i + 1) / statusTexts.length) * 100 + "%";
        await new Promise(r => setTimeout(r, 700)); // Dramatic pause
    }

    checkResult();
}

function checkResult() {
    // REAL TIME DATA FETCHING
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const tomorrowIndex = (today.getDay() + 1) % 7;
    const actualTomorrow = days[tomorrowIndex];

    document.getElementById('loading-screen').classList.add('hidden');

    if (userChoice === actualTomorrow) {
        // SUCCESS
        document.getElementById('success-screen').classList.remove('hidden');
        document.getElementById('final-day').innerText = "Yes, tomorrow is " + actualTomorrow;
    } else {
        // FAIL (Secret Mode)
        document.getElementById('fail-screen').classList.remove('hidden');
        document.getElementById('actual-day').innerText = actualTomorrow;
    }
}
