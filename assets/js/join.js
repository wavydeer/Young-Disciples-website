const currentYear = new Date().getFullYear()

const eventList = [
    {
        title: 'Some Title Here',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae officiis fugit, cum quo inventore distinctio blanditiis, quis iste voluptas non, accusantium quasi pariatur! Placeat facere, quisquam porro repellat nulla aliquam.',
        time: '10:00 am',
        day: 8,
        year: 2021,
        month: 'nov',
    }
]

$(eventList).each(function(key, value) {
    // loop over every event in the list and create a template
    $('.event-container').append( `
        <div class="event">
            <div class="event-left">
                <div class="event-date">
                    <div class="date">${value.day}</div>
                    <div class="month">${value.month} - ${value.year}</div>
                </div>
            </div>

            <div class="event-right">
                <h3 class="event-title">${value.title}e</h3>

                <div class="event-description">${value.description}</div>

                <div class="event-timing">
                    <i class='bx bxs-time' ></i> 10:00 am
                </div>
            </div>
        </div>
    `
    )
})