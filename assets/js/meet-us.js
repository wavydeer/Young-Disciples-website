$(async () => {
    let apiLink = 'https://6zjispevth.execute-api.us-east-1.amazonaws.com/YDJC-api/ydjc-database'
    // fetch leaders from database
    let getLeadersFromDB = ( await fetch(apiLink, {
        method: 'Get',
        mode: 'cors',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
            'accept': 'application/json'
        }
    }) ).json()

    const sortData = (data) => {
        let sortedData = [], leaderList = 0, num = 1
        // get how many leaders in total
        $( data ).each((index, object) => {
            if (object['YDJC-json'].split(' ')[0] == 'leaders') {
                leaderList++
            }
        })
        // sort the leaders in order
        while (sortedData.length != leaderList) {
            $(data).each((index, object) => {
                if (object['YDJC-json'].split(' ')[0] == 'leaders' && object['YDJC-json'].split(' ')[1] == num) {
                    num++
                    sortedData.push(object)
                }
            })
        }
        return sortedData
    }

    /** where images are located */
    const imagelocation = 'assets/img/';

    // go trough the leaders and add them to the DOM
    const addCardsToDOM = $( sortData((await getLeadersFromDB).body) ).each((index, cardObject) => {
        if (cardObject['YDJC-json'].split(' ')[0] == 'leaders') {
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
        }
    })

    const contactButtonLogic = (() => {
        // click eventListener for contact button
        $('.card .btn').on('click', (card) => {
            // save which leader has been clicked in session sotrage
            sessionStorage.setItem('person', $(card.target).parent('.card').attr('data-person'))
            // go to contact page in a new window
            window.location = 'contact.html'
        })
    })()
})