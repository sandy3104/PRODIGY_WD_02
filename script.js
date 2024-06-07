let timerInterval;
let elapsedTime = 0;
let isRunning = false;
let isPaused = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

function start() {
    if (!isRunning) {
        timerInterval = setInterval(updateTime, 1000);
        isRunning = true;
        isPaused = false;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timerInterval);
        isPaused = true;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    isPaused = false;
    display.textContent = formatTime(elapsedTime);
    laps.innerHTML = '';
}

function recordLap() {
    if (isRunning || isPaused) {
        const lapTime = formatTime(elapsedTime);
        const li = document.createElement('li');
        li.textContent = lapTime;
        laps.appendChild(li);
    }
}

function updateTime() {
    elapsedTime++;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
