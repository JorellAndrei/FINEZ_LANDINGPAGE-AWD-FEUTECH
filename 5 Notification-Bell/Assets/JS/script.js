const button = document.getElementById('_button');
const notif = document.getElementById('_notification');

button.addEventListener('click', () => {
    const ctr = Number(notif.getAttribute('data-count')) || 0;
    notif.setAttribute('data-count', ctr + 1);
    notif.classList.add('count');
    notif.classList.add('notify');
});


notif.addEventListener('animationend', () =>{
    notif.classList.remove('notify');
});