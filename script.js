const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const dateEl = document.getElementById('date');
const wrapper = document.querySelector('.clock-wrapper');

function updateClock() {
    const now = new Date();
    
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    
    hoursEl.textContent = h;
    minutesEl.textContent = m;
    secondsEl.textContent = s;
    
    // Format Date: e.g., 2026-02-25 WEDNESDAY
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateStr = now.toLocaleDateString('en-US', options).toUpperCase();
    // Replacing slashes or rearranging if necessary, but US format gives MM/DD/YYYY. 
    // Let's manually construct YYYY-MM-DD format for cool tech vibe
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekday = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    
    dateEl.textContent = `${year}.${month}.${day} | ${weekday}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// 3D Tilt Effect
document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    wrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset tilt on mouse leave
document.addEventListener('mouseleave', () => {
    wrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
    wrapper.style.transition = 'transform 0.5s ease';
});

document.addEventListener('mouseenter', () => {
    wrapper.style.transition = 'transform 0.1s ease-out';
});
