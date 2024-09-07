const director = document.querySelectorAll(".director")
const introduction = document.querySelector("#introduction")
const rule = document.querySelector("#rule")
const credit = document.querySelector("#credit")
const paraChar = document.querySelector("#character")

// click to scroll to certain position

director[0].addEventListener("click", () => {
    introduction.scrollIntoView({behavior: "smooth"})
})

director[1].addEventListener("click", () => {
    rule.scrollIntoView({behavior:"smooth"})
})

director[2].addEventListener("click", () => {
    credit.scrollIntoView({behavior:"smooth"})
})

// img scroll parallax