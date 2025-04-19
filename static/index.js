function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const time = `${hours % 12 || 12}:${minutes} ${ampm}`;
    dateTimeElement.textContent = `${day}, ${time}`;
}

// Update the time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call