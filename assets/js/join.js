

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================


const eventList = 
[
    {
        title: 'Red Capert Egg roll Thursday',
        description: 'Standing on a capert that is red while eating some eggs that have been rolled',
        time: '06:00 PM',
        day: '2',
        month: 'Dec',
        year: '2021',
    },
    {
        title: 'Youth twin day',
        description: 'Find a twin and dress identical',
        time: '04:00 PM',
        day: '4',
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

// ==================================================================

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
    $slide = $('.active').width();

    if ($(this).hasClass('next')) {
        $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
    } else if ($(this).hasClass('prev')) {
        $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
    }

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
        $('.active').prev().trigger('click');
    } else if (e.keyCode == 39) { // right
        $('.active').next().trigger('click');
    }
});