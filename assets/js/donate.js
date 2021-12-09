/** 
 * @function addYearToDOM - add each state to the DOM as an option for your address input
 * * auto executing
 * get data from "states" array in "donate.json" file
 */
const addYearToDom = (() => {
    $.getJSON('assets/js/donate.json', (data) => {
        $(data.states).each((index, state) => {
            $('.billing-info-section datalist[id=state-list]').append(`
                <option value="${state}"></option>
            `)
        })
    })
})()

/** 
 * @function addMonthToDom - add each month to the DOM as an option for expiration date input
 * * auto executing
 * get data from "month" array in "donate.json" file
 */
const addMonthToDom = (() => {
    $.getJSON('assets/js/donate.json', (data) => {
        $(data.months).each((index, month) => {
            $('.card-info-section datalist[id=months-list]').append(`
                <option value="${month}"></option>
            `)
        })
    })
})()

/**
 * @function addYearToDOM - add years to the DOM as an option for expiration date input
 * * auto executing
 * loop 19 times starting from the current year
 */
const addYearToDOM = (() => {
    currentYear = new Date().getFullYear()
    for (let year = currentYear; year < currentYear + 20; year++) {
        $('.card-info-section datalist[id=years-list]').append(`
            <option value="${year}"></option>
        `)
    }
})()

/**********************************************************************************************/

/** @function pageNavigation - show and hide some sections based on what the user is clicking */
const pageNavigation = $(() => {

    /** @constant hideSection - accepts an html element as a parameter and hides it using css*/
    const hideSection = section => $(section).css({ display: 'none' })
        /** @constant showSection - accepts an html element as a parameter and show it using css*/
    const showSection = section => $(section).css({ display: 'block' })

    /** @function showBillingSection - landing page gets blurred and billing info section is shown */
    const showBillingSection = (() => {
        $('#donation-btn').on('click', () => {
            $('.donation__section').addClass('fade-out') // blur the rest of the page
            showSection('.billing-info-section') // show the section to put billing credentials

            /** @function ShowCardInfoSection - billing info section gets hidden and card info section is shown */
            const ShowCardInfoSection = (() => {
                $('#billing-submit-btn').on('click', () => {
                    showSection('.card-info-section') // show the section to put card credentials
                    hideSection('.billing-info-section') // hide the section to put card credentials
                })

                // if the user click the previous button in the card info page
                $('#card-prev-btn').on('click', () => {
                    showSection('.billing-info-section') // show billing info container
                    hideSection('.card-info-section') // hide card info container
                })

                /** @function showReviewSection - billing info section gets hidden and review section is shown */
                const showReviewSection = (() => {
                    $('#card-submit-btn').on('click', () => {
                        alert('review section - not implemented')
                    })
                })()
            })()
        })
    })()

    /** 
     * Return to Landing page
     * if the user click cancel go back to the main page 
     * * can be clicked from any section inside the donation form
     * */
    $('.cancel-btn').on('click', () => {
        $('.donation__section').removeClass('fade-out') // remove blur from page
        hideSection('.card-info-section') // hide card info container if opened 
        hideSection('.billing-info-section') // hide billing info container if opened
    })
})