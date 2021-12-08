const imagelocation = 'assets/img/'

$.getJSON('assets/js/meet-us.json', (data) => {
    $(data.individuals).each((index, item) => {
        const { name, proffession, description, profilePicture, backgroundPicture } = item
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
    
    $('.card .btn').on('click', () => {
        sessionStorage.setItem('person', $(this).parent('.card').attr('data-person')) // can also use closest instead of parent
        location.href = 'contact.html';
    })
})
