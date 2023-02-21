const control = document.querySelectorAll('.control')
const items = document.querySelectorAll('.item')
const maxItems = items.length
let currentItem = 0

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left")

        if(isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if(currentItem >= maxItems) {
            currentItem = 0
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1
        }

        items.forEach(item => item.classList.remove('current-item'))
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

    })
})

// LAZY LOAD

const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 1) {
            entry.target.classList.add('hidden_off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.hidden')).forEach(element => {
    observer.observe(element)
})