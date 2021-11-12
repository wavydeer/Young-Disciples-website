// dropdown menu for states
// const states = [
//     'Alabama',
//     'Alaska',
//     'Arizona',
//     'Arkansas',
//     'California',
//     'Colorado',
//     'Connecticut',
//     'Delaware',
//     'Florida',
//     'Georgia',
//     'Hawaii',
//     'Idaho',
//     'Illinois',
//     'Indiana',
//     'Iowa',
//     'Kansas',
//     'Kentucky',
//     'Louisiana',
//     'Maine',
//     'Maryland',
//     'Massachusetts',
//     'Michigan',
//     'Minnesota',
//     'Mississippi',
//     'Missouri',
//     'Montana',
//     'Nebraska',
//     'Nevada',
//     'New Hampshire',
//     'New Jersey',
//     'New Mexico',
//     'New York',
//     'North Carolina',
//     'North Dakota',
//     'Ohio',
//     'Oklahoma',
//     'Oregon',
//     'Pennsylvania',
//     'Rhode Island',
//     'South Carolina',
//     'South Dakota',
//     'Tennessee',
//     'Texas',
//     'Utah',
//     'Vermont',
//     'Virginia',
//     'Washington',
//     'West Virginia',
//     'Wisconsin',
//     'Wyoming',
// ]

// // go through the array of states
// for (let i = 0; i < states.length; i++) {
//     // create the div which contain a state
//     const stateDiv = document.createElement("div")
//     stateDiv.className = 'dropdown__option'

//     // create a radio input so they can be selected
//     const stateInput = document.createElement('input')
//     stateInput.type = 'radio'
//     stateInput.className = 'dropdown__button'
//     stateInput.name = 'state'
//     stateInput.id = states[i]

//     // create a label so user can see what they are selected
//     const stateLabel = document.createElement('label')
//     stateLabel.className = 'dropdown__label'
//     stateLabel.innerText = states[i]

//     // add button and label to the state container
//     stateDiv.appendChild(stateInput)
//     stateDiv.appendChild(stateLabel)

//     // add state container to the document
//     document.querySelector('.dropdown__container').appendChild(stateDiv)
// }

// // ================================================================

// // show and hide drop down menu
// $('.dropdown__select').click(function () {
//     $('.dropdown__container').toggleClass('active')
// })

// // add what user selected as the drop down menu title
// $('.dropdown__option').each(function () {
//     $(this).click(function () {
//         $('.dropdown__select').innerHTML = $('label').innerHTML
//         $('.dropdown__container').removeClass('active')
//     })
// })

// // =============================================================== 

// // form
// $('.payment').click(function (e) {
//     e.preventDefault()
//     $('.donate__form').trigger('reset')
// })