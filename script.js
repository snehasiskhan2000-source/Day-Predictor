const messages = [
    "Connecting to Jaadu...",
    "Consulting to Elon Musk...",
    "Contacting NASA satellites...",
    "Calling to Stephen Hawking...",
    "Running DNA analysis...",
    "Decrypting space-time...",
    "Contacting Hubble Telescope...",
    "Getting the info from the Sun...",
    "Finalizing prediction..."
];

function predict(selectedDay) {
    document.getElementById('selection-ui').classList.add('hidden');
    document.getElementById('loading-ui').classList.remove('hidden');

    let progress = 0;
    let msgIndex = 0;
    const fill = document.getElementById('fill');
    const text = document.getElementById('loading-text');

    const interval = setInterval(() => {
        progress += 1.2;
        fill.style.width = progress + "%";

        if (progress % 11 < 1.2 && msgIndex < messages.length) {
            text.innerText = messages[msgIndex];
            msgIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            showResult(selectedDay);
        }
    }, 40);
}

function showResult(day) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let nextDay = days[(days.indexOf(day) + 1) % 7];
    
    document.getElementById('loading-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');
    document.getElementById('predicted-day').innerText = nextDay;

    // Trigger Confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}
