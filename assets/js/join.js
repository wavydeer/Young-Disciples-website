const manageCarousel=$(window).on("load",()=>{$(".schedule-carousel").owlCarousel({margin:20,loop:!0,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!0,smartSpeed:1e3,nav:!0,navText:['<i class="fas fa-chevron-left nav-btn"></i>','<i class="fas fa-chevron-right nav-btn"></i>'],responsive:{0:{items:1},882:{items:2},1180:{items:3}}})}),loadSpecialEvents=void $.getJSON("assets/json/events.json",e=>{$(e.eventList).each((e,s)=>{var{title:a,description:i,time:t,day:v,month:n,year:s}=s;$(".event-container").append(`
                <div class="event">
                    <div class="event-left">
                        <div class="event-date">
                            <div class="date">${v}</div>
                            <div class="month">${n} <br> - <br> ${s}</div>
                        </div>
                    </div>

                    <div class="event-right">
                        <h3 class="event-title">${a}</h3>
                        <div class="event-description">${i}</div>
                        <div class="event-timing">
                            <i class='bx bxs-time' ></i> ${t}
                        </div>
                    </div>
                </div>
            `)})});