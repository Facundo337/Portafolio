// BARRAS DE PROGRESO
const progressBars = document.querySelectorAll('.progress');
const progressTexts = document.querySelectorAll('.progress-text');

const targetProgresses = [80, 100, 100];

const currentProgresses = [0, 0, 0]; 
const barFilled = [false, false, false];

function updateProgress(progressBar, progressText, targetProgress, index) {
    if (currentProgresses[index] < targetProgress) {
        currentProgresses[index]++;
        progressBar.style.width = currentProgresses[index] + "%";
        progressText.textContent = currentProgresses[index] + "%";
        setTimeout(() => updateProgress(progressBar, progressText, targetProgress, index), 200);
    }
    if (currentProgresses[index] >= targetProgress) {
        barFilled[index] = true;
    }
}

document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const triggerPosition = 600;

    for (let i = 0; i < progressBars.length; i++) {
        const progressBar = progressBars[i];
        const progressText = progressTexts[i];

        const element = progressBar.parentElement.parentElement;

        if (scrollTop > element.offsetTop - triggerPosition) {
            updateProgress(progressBar, progressText, targetProgresses[i], i);
        }
    }
});

//DESCARGAR  CV
