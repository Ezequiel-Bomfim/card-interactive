const buttons = document.querySelectorAll(".buttons button")
const form = document.querySelector("#form")

const card = document.querySelector('.card')
const tankYouPage = document.querySelector('.tank-you')
const userSelection = document.querySelector('#selection')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    optionSelectedOrNot()
    showOrHideCard()
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonSelected = document.querySelector('.selected')
        if (buttonSelected) removeSelected()
        button.classList.add('selected')
    })
})

function removeSelected() {
    buttons.forEach((button) => {
        button.classList.remove('selected')
    })
}

function showOrHideCard() {
    card.classList.remove('active')
    tankYouPage.classList.add('active')
}

function optionSelectedOrNot() {
    const hasSelectedOption = document.querySelector('.selected')
    const selectedOption = hasSelectedOption.textContent

    if (!hasSelectedOption) return

    userSelection.innerText = `You selected ${selectedOption} out of 5`
}