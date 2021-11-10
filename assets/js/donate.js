// drop down menu

const dropdownSelect = document.querySelector('.dropdown__select')
const dropdownContainer = document.querySelector('.dropdown__container')

const dropdownOption = document.querySelectorAll('.dropdown__option')

dropdownSelect.addEventListener('click', () => {
    dropdownContainer.classList.toggle('active')
})

dropdownOption.forEach(i => {
    i.addEventListener("click", () => {
        dropdownSelect.innerHTML = i.querySelector("label").innerHTML;
        dropdownContainer.classList.remove("active");
    })
})


// form
const donateForm = document.querySelector('.donate__form')
const payment = document.querySelector('.payment')

payment.addEventListener('click', (e) => {
    e.preventDefault()
    // donateForm.submit()
    donateForm.reset()
})