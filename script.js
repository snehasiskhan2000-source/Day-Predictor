const messages = [
    "Consulting with Elon Musk...",
    "Contacting NASA satellites...",
    "Running DNA analysis...",
    "Decrypting space-time...",
    "Getting info from the Sun...",
    "Consulting Jaadu (Alien)...",
    "Finalizing prediction..."
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function predict(selectedDay) {
    document.getElementById('selection-ui').classList.add('hidden');
    document.getElementById('loading-ui').classList.remove('hidden');

    let progress = 0;
    let msgIndex = 0;
    const fill = document.getElementById('fill');
    const text = document.getElementById('loading-text');

    const interval = setInterval(() => {
        progress += 1.5;
        fill.style.width = progress + "%";

        // Change text every 15% progress
        if (progress % 15 < 1.5 && msgIndex < messages.length) {
            text.innerText = messages[msgIndex];
            msgIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            showResult(selectedDay);
        }
    }, 50);
}

function showResult(selectedDay) {
    document.getElementById('loading-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');

    // Logic: Find the index of the selected day and add 1
    const currentIndex = days.indexOf(selectedDay);
    const nextIndex = (currentIndex + 1) % 7;
    
    document.getElementById('predicted-day').innerText = days[nextIndex];
}
