const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')
const reviewTxt = document.querySelector('#review')
const avatar = document.querySelector('#avatar')
let reviewIndex = 1

const reviews = [
    {
        img: 'https://source.unsplash.com/800x600/?nature',
        comment: 'Eleventy is a killer static site generator. That’s all.',
    },
    {
        img: 'https://source.unsplash.com/800x600/?sky',
        comment: 'I looked into and actively tried using various static site generators for this project. Eleventy was the only one I could find that gave me the fine-grained control I needed at blazingly fast build times.',
    },
    {
        img: 'https://source.unsplash.com/800x600/?water',
        comment: "Think the reason everyone is loving [Eleventy] so much (myself included) is that it doesnt come with a prescription about data sources or template rendering."
    },
]

previousBtn.addEventListener('click', function() {
    if (reviewIndex != 0)
    {
        avatar.src = reviews[reviewIndex - 1].img
        reviewTxt.textContent = reviews[reviewIndex - 1].comment
        reviewIndex--;
    }
})

nextBtn.addEventListener('click', function() {
    if (reviewIndex < reviews.length-1)
    {
        avatar.src = reviews[reviewIndex + 1].img
        reviewTxt.textContent = reviews[reviewIndex + 1].comment
        reviewIndex++;
    }
})