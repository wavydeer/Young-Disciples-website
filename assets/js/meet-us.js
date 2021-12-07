const imagelocation = 'assets/img/'

$.getJSON('assets/js/meet-us.json', (data) => {
    $(data.individuals).each((index, item) => {
        $('.card-wrapper').append(`
            <div class="card" data-person="${item.name}">
                <img src= ${imagelocation}${item.backgroundPicture} class="card-image">
                <img src= ${imagelocation}${item.profilePicture} class="profile-image">
                <h1 class="card-title">${item.name}</h1>
                <p class="job-title">${item.proffession}</p>

                <div class="about-container">
                    <p class="about">
                        ${item.description}
                    </p>
                </div>

                <a href="#ok" class="btn">Contact</a> 
            </div>
        `)
    })
})

$('.card .btn').click( () => {
    sessionStorage.setItem('person', $(this).parent('.card').attr('data-person')) // can also use closest instead of parent
    location.href = 'contact.html';
})
