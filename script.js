let selected = "";
const logs = [
    "Establishing Satellite Link...",
    "Bypassing ISRO Firewall...",
    "Querying Elon Musk's Neuralink...",
    "Syncing with Atomic Clock...",
    "Analyzing Atmospheric Pressure...",
    "Confirming with Jadu (Mars)...",
    "Decoding Time-Space Fabric..."
];

function setDay(day) {
    selected = day;
    document.querySelectorAll('.day-chip').forEach(c => c.classList.remove('selected'));
    event.target.classList.add('selected');
    document.getElementById('submit-pnr').classList.add('active');
    document.getElementById('submit-pnr').disabled = false;
}

async function handlePredict() {
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('loader-section').classList.remove('hidden');

    const bar = document.getElementById('pnr-progress-bar');
    const msg = document.getElementById('status-msg');

    for (let i = 0; i < logs.length; i++) {
        msg.innerText = logs[i];
        bar.style.width = ((i + 1) / logs.length) * 100 + "%";
        await new Promise(res => setTimeout(res, 600)); 
    }

    showFinalResult();
}

function showFinalResult() {
    document.getElementById('loader-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');

    // REAL-TIME DATE CALCULATION
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayIndex = new Date().getDay();
    const tomorrowIndex = (todayIndex + 1) % 7;
    const tomorrowReal = days[tomorrowIndex];

    if (selected === tomorrowReal) {
        document.getElementById('success-ui').classList.remove('hidden');
        document.getElementById('res-day').innerText = "Tomorrow is " + tomorrowReal;
    } else {
        document.getElementById('fail-ui').classList.remove('hidden');
        document.getElementById('actual-day').innerText = tomorrowReal;
    }
}
