const letter = document.querySelectorAll('#_letters #_letter');

letter.forEach((letter) => {
    letter.addEventListener('mouseover', () => {
        letter.classList.toggle('active')
    })
})