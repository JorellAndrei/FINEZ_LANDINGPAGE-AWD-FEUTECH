const container = document.getElementById('_container');
const input = document.getElementById('_search');
const button = document.getElementById('_button');
const searchIcon = document.getElementById('_searchIcon');
const closeIcon = document.getElementById('_closeIcon');

button.addEventListener('click', () => {
    container.classList.toggle('active');
    button.classList.toggle('active');

    if (container.classList.contains('active')) {
        searchIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
        input.focus();
    } else {
        searchIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
    }

    alert('Button activated');

});