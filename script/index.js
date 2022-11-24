const acordions = document.getElementsByClassName("accordion__card")

for (let accordion of acordions) {
    accordion.addEventListener("click", () => {
        const accordionContent = accordion.lastElementChild

        const accordionIsActive = accordionContent.classList.contains("active");

        console.log(accordion.childNodes[1].childNodes[3].childNodes[3].src)

        if (accordionIsActive) {
            accordionContent.classList.remove("active")
            accordion.childNodes[1].childNodes[3].childNodes[3].src = "../assets/plusIcon.svg"
            return
        }

        accordionContent.classList.add("active")
        accordion.childNodes[1].childNodes[3].childNodes[3].src = "../assets/lessIcon.svg"

    })
}


const buttonSimular = document.querySelector('#simular')
const inputSimular = document.querySelector('#simularInput')

const buttonSimularTwo = document.querySelector('#simular2')
const inputSimularTwo = document.querySelector('#simularInput2')


buttonSimular.addEventListener('click', () => {

    console.log(inputSimular.value)

    const formatPhrase = `https://wa.me/5591999988663?text=Ol%C3%A1%2C+gostaria+de+simular+a+antecipa%C3%A7%C3%A3o+do+meu+FGTS.+Saldo+FGTS%3A+R%24+${inputSimular.value}`;

    `https://wa.me/5591999988663?text=Ol%C3%A1%2C+gostaria+de+simular+a+antecipa%C3%A7%C3%A3o+do+meu+FGTS.+Saldo+FGTS%3A+R%24+${inputSimular.value}`

    location.replace(formatPhrase);


})

buttonSimularTwo.addEventListener('click', () => {

    console.log(inputSimularTwo.value)

    const formatPhrase = `https://wa.me/5591999988663?text=Ol%C3%A1%2C+gostaria+de+simular+a+antecipa%C3%A7%C3%A3o+do+meu+FGTS.+Saldo+FGTS%3A+R%24+${inputSimularTwo.value}`;

    `https://wa.me/5591999988663?text=Ol%C3%A1%2C+gostaria+de+simular+a+antecipa%C3%A7%C3%A3o+do+meu+FGTS.+Saldo+FGTS%3A+R%24+${inputSimular.value}`

    location.replace(formatPhrase);


})



const allOptions = document.querySelectorAll(".header__link")
const sidebarButton = document.querySelector("#sidebarButton")
const headerNavigation = document.querySelector(".header__options__mobile")

const hasAlreadyActive = Array.from(headerNavigation.classList)
const iconImg = sidebarButton.childNodes[1]

sidebarButton.addEventListener("click", () => {

    const hasAlreadyActive = Array.from(headerNavigation.classList)


    if (hasAlreadyActive.includes("active")) {
        headerNavigation.classList.remove("active")
        iconImg.src = "./assets/sidebaricon.svg"
    } else {
        headerNavigation.classList.add("active")
        iconImg.src = "../assets/closeicon.svg"
    }


})

allOptions.forEach((item) => {
    item.addEventListener("click", () => {
        headerNavigation.classList.remove("active")
        iconImg.src = "./assets/sidebaricon.svg"
    })
})