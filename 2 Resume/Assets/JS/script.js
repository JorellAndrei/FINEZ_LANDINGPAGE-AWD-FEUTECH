document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const resume = document.getElementById('resume');

    body.classList.add('light-mode');
    resume.classList.add('light-mode');
});


let isDarkMode = false;

function toggleColor() {
    const body = document.body;
    const resume = document.getElementById('resume');
    const profileImage = document.getElementById('profileImage');
    const colorToggleBtn = document.getElementById('colorToggle');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        resume.classList.add('dark-mode');
        resume.classList.remove('light-mode');
        profileImage.classList.add('animate');
        colorToggleBtn.style.backgroundColor = '#F4CE14';
        colorToggleBtn.style.color = '#495E57';
    } else {
        body.classList.remove('dark-mode');
        resume.classList.remove('dark-mode');
        profileImage.classList.remove('animate');
        body.classList.add('light-mode');
        resume.classList.add('light-mode');
        colorToggleBtn.style.backgroundColor = '#495E57';
        colorToggleBtn.style.color = '#F4CE14';
    }
}