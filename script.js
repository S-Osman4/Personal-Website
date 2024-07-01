function updateCurrentInfo() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    function update() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });

        currentTimeElement.textContent = utcTime;
        currentDayElement.textContent = day;
    }

    update();
    setInterval(update, 1000);
}

document.addEventListener('DOMContentLoaded', updateCurrentInfo);