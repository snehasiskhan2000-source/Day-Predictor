const messages = [
    "Syncing with Atomic Clock...",
    "Consulting to Elon Musk...",
    "Accessing Neural Link...",
    "Bypassing Firewall...",
    "Running DNA analysis...",
    "Consulting to Stephen Hawking...",
    "Finalizing prediction..."
];

const funnyFailMessages = [
    "Even my toaster knows better than you.",
    "Did you skip kindergarten?",
    "Error 404: Brain not found.",
    "Calculating your IQ... result: 0.001",
    "Please return to school immediately."
];

function checkDate(userSelectedDay) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get Real Time Data
    const todayIndex = new Date().getDay();
    const actualTomorrow = days[(todayIndex + 1) % 7];
    
    const isCorrect = userSelectedDay === actualTomorrow;

    // Start Animation UI
    document.getElementById('selection-ui').classList.add('hidden');
    document.getElementById('loading-ui').classList.remove('hidden');

    let progress = 0;
    let msgIndex = 0;
    const fill = document.getElementById('fill');
    const text = document.getElementById('loading-text');

    const interval = setInterval(() => {
        progress += 2;
        fill.style.width = progress + "%";

        if (progress % 15 < 2 && msgIndex < messages.length) {
            text.innerText = messages[msgIndex];
            msgIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            showFinalResult(isCorrect, actualTomorrow);
        }
    }, 40);
}

function showFinalResult(isCorrect, actualTomorrow) {
    document.getElementById('loading-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');

    const header = document.getElementById('result-header');
    const icon = document.getElementById('status-icon');
    const quote = document.getElementById('funny-quote');
    const desc = document.getElementById('result-desc');
    const daySpan = document.getElementById('predicted-day');

    if (isCorrect) {
        icon.innerText = "✅";
        header.innerText = "YOU'RE RIGHT!";
        header.style.color = "#00d2ff";
        daySpan.innerText = actualTomorrow;
        quote.innerText = "Finally you decoded the Date.";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        icon.innerText = "❌";
        header.innerText = "YOU'RE STUPID!";
        header.style.color = "#ff4757";
        desc.innerHTML = `Actually, tomorrow is <b>${actualTomorrow}</b>`;
        quote.innerText = funnyFailMessages[Math.floor(Math.random() * funnyFailMessages.length)];
        document.querySelector('.iq-box').innerText = "System Analysis: IQ too low to display.";
    }
}
