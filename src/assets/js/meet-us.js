/** where images are located */
const imagelocation = 'assets/img/';

/** 
 * @function
 *  get Leaders from backend and load it into the DOM
 * 
 * ! use Fetch API
 * TODO: use Fetch API
 */
const getLeaders = (() => {
    /**
     * @function
     * Each card has a contact button and when it is clicked,
     * this function saves it to session storage,
     * and opens a new window to contact.html
     */
    const contactButtonLogic = () => {
        // click eventListener for contact button
        $('.card .btn').on('click', (card) => {
            // save which leader has been clicked in session sotrage
            sessionStorage.setItem('person', $(card.target).parent('.card').attr('data-person'))
            // go to contact page in a new window
            window.open('contact.html')
        })
    }

    const generateCards = $.getJSON('assets/json/leaders.json', (data) => {
        $(data.individuals).each((index, cardObject) => {
            // extract the necessary datapoints from "card"
            const { name, proffession, description, profilePicture, backgroundPicture } = cardObject

            // add each leader as a card which users can contact to the dom
            $('.card-wrapper').append(`
                <div class="card" data-person="${name}">
                    <img src= ${imagelocation}${backgroundPicture} class="card-image" alt="">
                    <img src= ${imagelocation}${profilePicture} class="profile-image" alt="">
                    <h1 class="card-title">${name}</h1>
                    <p class="job-title">${proffession}</p>

                    <div class="about-container">
                        <p class="about">
                            ${description}
                        </p>
                    </div>

                    <a class="btn">Contact</a> 
                </div>
            `)
        })
        // add listener to go to contact page if user click contact button
        contactButtonLogic()
    })
})()