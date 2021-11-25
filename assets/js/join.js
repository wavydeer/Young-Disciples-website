// IMPROVED JAVASCRIPT & ADDED A FEW CHANGES

const slider = document.querySelector(".schedule__carousel");
const slides = document.querySelectorAll(".schedule__day-card");
const button = document.querySelectorAll(".button");

let current = Math.floor(Math.random() * slides.length);
let prev = current > 0 ? current - 1 : slides.length - 1;
let next = current < slides.length - 1 ? current + 1 : 0;

const update = () => {
    slides.forEach(it => {
        it.classList.remove("active");
        it.classList.remove("prev");
        it.classList.remove("next");
    });

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current > 0 ? current - 1 : slides.length - 1;
    next = current < slides.length - 1 ? current + 1 : 0;

    update();
}

update();

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================


const eventList = [{
        title: 'Nothing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae officiis fugit, cum quo inventore distinctio blanditiis, quis iste voluptas non, accusantium quasi pariatur! Placeat facere, quisquam porro repellat nulla aliquam.',
        time: '10:00 PM',
        day: 8,
        year: 2021,
        month: 'nov',
    },
    {
        title: 'Something',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae officiis fugit, cum quo inventore distinctio blanditiis, quis iste voluptas non, accusantium quasi pariatur! Placeat facere, quisquam porro repellat nulla aliquam.',
        time: '12:15 AM',
        day: 15,
        year: 2021,
        month: 'dec',
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