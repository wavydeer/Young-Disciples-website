// needs window.load because carousell does not render properly with only document.ready
$(window).on("load", () => {
    $(() => {
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
    })
});

// #############################################################
// special-event__section
// #############################################################

$.getJSON('assets/js/join.json', (data) => {
    $(data.eventList).each((index, item) => {
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
    })
})