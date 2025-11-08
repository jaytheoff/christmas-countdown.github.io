const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const targetDate = new Date('2025-12-25T23:59:59');

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    Days.textContent = String(days).padStart(2, '0');
    Hours.textContent = String(hours).padStart(2, '0');
    Minutes.textContent = String(minutes).padStart(2, '0');
    Seconds.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
document.getElementById('bgMusic').play()
    .then(() => {
        console.log('Background music is playing.');
    })
    .catch((error) => {
        console.error('Error playing background music:', error);
    });