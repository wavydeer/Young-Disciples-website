// add all the states to the state input field
$.getJSON('assets/js/donate.json', (data) => {
    $(data.states).each((index, item) => {
        $('.billing-info-section datalist[id=state-list]').append(`
            <option value="${item}"></option>
        `)
    })
})

// add all of the months to the month input field
$.getJSON('assets/js/donate.json', (data) => {
    $(data.months).each((index, item) => {
        $('.card-info-section datalist[id=months-list]').append(`
            <option value="${item}"></option>
        `)
    })
})

// add the years to the year input field
// get today's year and add 20 to  it and add it to the input field
for (let year = new Date().getFullYear(); year < new Date().getFullYear() + 20; year++) {
    $('.card-info-section datalist[id=years-list]').append(`
        <option value="${year}"></option>
    `)
}

// when the document is ready
$(() => {
    // if the user click donate button in the landing page
    $('#donation-btn').on('click', () => {
        // blur the rest of the page
        $('.donation__section').css({
            transition: 'all 1s ease-in-out',
            filter: 'blur(8px)',
            userSelect: 'none'
        })
        // show the section to put billing credentials
        $('.billing-info-section').css({
            display: 'block'
        })

        // if the user click next in the billing info page
        $('#billing-submit-btn').on('click', () => {
            // show the section to put card credentials
            $('.card-info-section').css({
                    display: 'block'
                })
                // hide the section to put card credentials
            $('.billing-info-section').css({
                display: 'none'
            })

            // if the user click the previous button in the card info page
            $('#card-prev-btn').on('click', () => {
                // hide card info container
                $('.card-info-section').css({
                    display: 'none'
                })
                // show billing info container
                $('.billing-info-section').css({
                    display: 'block'
                })
            })

            // if the user click next in the card info page
            $('#card-submit-btn').on('click', () => {
                // hide card info page and show a review page
                // $('.card-info-section').css({
                //     display: 'none'
                // })
                alert('not implemented')
            })
        })
    })

    // if the user click cancel, go back to main landing page
    $('.cancel-btn').on('click', () => {
        // remove blur from page
        $('.donation__section').css({
            transition: 'all 0s ease-in-out',
            filter: 'none',
            userSelect: 'auto'

        })
        // hide card info container if opened 
        $('.card-info-section').css({
            display: 'none'
        })
        // hide billing info container if opened 
        $('.billing-info-section').css({
            display: 'none'
        })
    })
})