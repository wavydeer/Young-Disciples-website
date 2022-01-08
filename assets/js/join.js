/** @function manageCarousel - Load carousel and customize some settings */
const manageCarousel = $( window ).on("load", () => {
    $('.schedule-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        nav: true,
        navText: [
            '<i class="fas fa-chevron-left nav-btn"></i>',
            '<i class="fas fa-chevron-right nav-btn"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            882: {
                items: 2
            },
            1180: {
                items: 3
            }
        }
    })
});

/**********************************************************************************************/

/** @fetch - get events list from database */
fetch(' https://6zjispevth.execute-api.us-east-1.amazonaws.com/YDJC-api/ydjc-database', {
    method: 'Get',
    mode: 'cors',
    headers: {
        'content-type': 'application/json; charset=UTF-8',
        'accept': 'application/json'
    }
})
.then(response => { return response.json() }) 
.then(data => {

    const sortData = () => {
        let sortedData = [], eventList = 0, num = 1

        // get how many events in total
        $(data.body).each((index, object) => {
            if (object['YDJC-json'].split(' ')[0] == 'events') {
                eventList++
            }
        })
    
        // sort the events in order
        while (sortedData.length != eventList) {
            $(data.body).each((index, object) => {
                if (object['YDJC-json'].split(' ')[0] == 'events' && object['YDJC-json'].split(' ')[1] == num) {
                    num++
                    sortedData.push(object)
                }
            })
        }

        return sortedData
    }
    
    $(sortData()).each((index, item) => {
        if (item['YDJC-json'].split(' ')[0] == 'events') {
            const { title, description, time, day, month, year } = item
            // loop over every event in the list and create a template
            $('.event-container').append(`
                <div class="event">
                    <div class="event-left">
                        <div class="event-date">
                            <div class="date">${day}</div>
                            <div class="month">${month} <br> - <br> ${year}</div>
                        </div>
                    </div>

                    <div class="event-right">
                        <h3 class="event-title">${title}</h3>
                        <div class="event-description">${description}</div>
                        <div class="event-timing">
                            <i class='bx bxs-time' ></i> ${time}
                        </div>
                    </div>
                </div>
            `)
        }
    })
})
.catch(() => { console.log('An error Occured. Please Reload') })