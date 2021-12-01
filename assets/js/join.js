$('.schedule-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    nav: false,
    navText : [
        '<i class="fas fa-chevron-left nav-btn"></i>',
        '<i class="fas fa-chevron-right nav-btn"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000 : {
            items: 3
        }
    }
})

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================


const eventList = 
[
    {
        title: 'Red Capert Egg roll Thursday',
        description: 'Standing on a capert that is red while eating some eggs that have been rolled',
        time: '06:00 PM',
        day: '02',
        month: 'Dec',
        year: '2021',
    },
    {
        title: 'Youth twin day',
        description: 'Find a twin and dress identical',
        time: '04:00 PM',
        day: '04',
        month: 'Dec',
        year: '2021',
    },
    {
        title: 'PJ\'s and a movie',
        description: 'Watch a movie in your PJ\'s at church',
        time: '06:00 PM',
        day: '10',
        month: 'Dec',
        year: '2021'
    },
    {
        title: 'Youth fellowship and field day at the Park',
        description: 'Have some fellowship with my fellow youthmates at the park',
        time: '01:00 PM',
        day: '11',
        month: 'Dec',
        year: '2021'
    },
    {
        title: 'Orlando with the Church',
        description: 'Both youth and grown ups go to Orlando for a fun time',
        time: '05:00 AM',
        day: '18',
        month: 'Dec',
        year: '2021'
    },
    {
        title: 'Men\'s Ministry Dinner',
        description: 'The men all have dinner',
        time: '06:00 PM',
        day: '23',
        month: 'Dec',
        year: '2021'
    },
    {
        title: 'Special Presentation',
        description: 'Spoiler alert, the bible has nothing special on this day',
        time: '04:00 PM',
        day: '25',
        month: 'Dec',
        year: '2021'
    },
    {
        title: 'Women\'s Ministry Dinner',
        description: 'The women all have dinner',
        time: '06:00 PM',
        day: '30',
        month: 'Dec',
        year: '2021'
    },
    {
        title: 'New Year service',
        description: 'Come thank God for a great year as we head into another',
        time: '08:00 PM',
        day: '31',
        month: 'Dec',
        year: '2021'
    }
]

$(eventList).each(function(key, value) {
    // loop over every event in the list and create a template
    $('.event-container').append(`
        <div class="event">
            <div class="event-left">
                <div class="event-date">
                    <div class="date">${value.day}</div>
                    <div class="month">${value.month} <br> - <br> ${value.year}</div>
                </div>
            </div>

            <div class="event-right">
                <h3 class="event-title">${value.title}</h3>

                <div class="event-description">${value.description}</div>

                <div class="event-timing">
                    <i class='bx bxs-time' ></i> ${value.time}
                </div>
            </div>
        </div>
    `)
})