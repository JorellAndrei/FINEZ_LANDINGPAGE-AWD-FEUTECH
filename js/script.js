/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index]
    item.style.setProperty('--zIndex', zIndex)
    item.style.setProperty('--active', (index - active) / $items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress / 100 * ($items.length - 1))

    $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
    item.addEventListener('click', () => {
        progress = (i / $items.length) * 100 + 10
        animate()
    })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel
    progress = progress + wheelProgress
    animate()
}

const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
        $cursors.forEach(($cursor) => {
            $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        })
    }
    if (!isDown) return
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const mouseProgress = (x - startX) * speedDrag
    progress = progress + mouseProgress
    startX = x
    animate()
}

const handleMouseDown = e => {
    isDown = true
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
    isDown = false
}

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

document.querySelector('.item1').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_ACT1-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item2').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_ACT2-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item3').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_ACT3A-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item4').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_ACT4-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item5').addEventListener('click', function() {
    window.open('data:image/png;base64,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', '_blank');
});

document.querySelector('.item6').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_ANIMATION-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item7').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_RESUME-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item8').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_TECHNICAL2-AWD-FEUTECH/', '_blank');
});

document.querySelector('.item9').addEventListener('click', function() {
    window.open('https://jorellandrei.github.io/FINEZ_TECHNICAL3-AWD-FEUTECH/', '_blank');
});
