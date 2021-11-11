// wait for whole page to load
$(window).on('load', function() {
    // active link on navbar
    $("#nav__link-meet-us").addClass("active-link")
})


// =====================================================

// populate cards
const imagelocation = 'assets/img/'

const individuals = [
    {
        name : 'Pauldette Dor',
        proffession : 'President',
        description : 'As President I oversee all ministry programs directed specifically within the Youth. I lead in the development, coordinatation and lead of all church youth activities.',
        profilePicture : imagelocation + 'Pauldette-profile.PNG',
        backgroundPicture : imagelocation + 'Pauldette-background.jpeg'
    },
    {
        name : 'Derek Polydor',
        proffession : 'Vice President',
        description : 'Being second in command, I assist in all of the roles of the president while also maintaining control over certain ministries like the Mens Ministries. While also being a guide to others.',
        profilePicture : imagelocation + 'Derek-profile.jpeg',
        backgroundPicture : imagelocation + 'Derek-background1.jpeg'
    },
    {
        name : 'Jenny Lesly',
        proffession : 'Secretary',
        description : 'I typically handle all the scheduling of events, attendance, and records of things that are going to happen and things that have already happened. While assiting where it sees fit.',
        profilePicture : imagelocation + 'Jenny-profile.PNG',
        backgroundPicture : imagelocation + 'Jenny-background.jpeg'
    },
    {
        name : 'Eluid Philip',
        proffession : 'Lead Treasurer',
        description : 'As lead, I maintain control and advise with the financial decision of the youth. Planning fundraisers and events are ways we benefit in making money for the youth.',
        profilePicture : imagelocation + 'Philip-profile.JPG',
        backgroundPicture : imagelocation + 'Philip-background.jpeg'
    },
    {
        name : 'Jessica Cherivil',
        proffession : 'Chior Director',
        description : 'I am the overseer of the chior. I plan meetings, teach and practice with the team. I am the lead when performing at events and in house, directing the notes and the sequence of the songs.',
        profilePicture : imagelocation + 'Jessica-profile.jpg',
        backgroundPicture : imagelocation + 'Jessica-background.jpeg'
    },
    {
        name : 'Junior Marseille',
        proffession : 'Youth Preacher',
        description : 'My roles include being the preacher for the youth while also teaching other preachers. When Im not doing that playing the guitar for the directors is my passion.',
        profilePicture : imagelocation + 'Junior-profile.JPG',
        backgroundPicture : imagelocation + 'Junior-Background.PNG'
    },
    {
        name : 'Evona Prophet',
        proffession : 'Praise Team Leader',
        description : 'As praise team leader, I guide, teach and sing with those chosen to be apart of the group. I also assit in the treasury department for the youth and the main church.',
        profilePicture : imagelocation + 'Evona-profile.jpg',
        backgroundPicture : imagelocation + 'Evona-background.PNG'
    },
    {
        name : 'Bienta Bien-Aime',
        proffession : 'Advisor/Planner',
        description : 'When the youth decideds to take a trip I am usually the one on duty making the arrangements. I also help other with financial decisions and life advice.',
        profilePicture : imagelocation + 'Bienta-profile.jpeg',
        backgroundPicture : imagelocation + 'Bienta-background.jpeg'
    },
    {
        name : 'Malcolm Verdier',
        proffession : 'Treasurer/Advisor',
        description : 'I assist with the youth treasury, while also being an advisor on college and financial dealings. I carry a seat in the decision making when there are any changed within the youth.',
        profilePicture : imagelocation + 'Malcolm-profile.PNG',
        backgroundPicture : imagelocation + 'Malcolm-background1.jpg'
    },
    {
        name : 'George Blaise',
        proffession : 'Youth Male Coulselor',
        description : 'As counselor, it became my duty to always check on the men youth on a personal level to make sure we can get to the root of any problems. On my free time I also play the drums.',
        profilePicture : imagelocation + 'George-profile.PNG',
        backgroundPicture : imagelocation + 'George-background.JPG'
    },
    {
        name : 'Fallande Joseph',
        proffession : 'Youth Women Counselor',
        description : 'I am an ear that will listen so the women can having someone to confide in and trust. I keep tabs and check up on the women of the youth to make sure there is always help through tough times.',
        profilePicture : imagelocation + 'Fallande-profile.jpeg',
        backgroundPicture : imagelocation + 'Fallande-background.jpeg'
    },
    {
        name : 'Lusie Pierre',
        proffession : 'Counselor',
        description : 'I assist where ever is needed within the church. When I am on my free time I am as a counselor to those going through tough times and serious issues.',
        profilePicture : imagelocation + 'Lusie-profile.jpeg',
        backgroundPicture : imagelocation + 'Lusie-background.jpeg'
    },
    {
        name : 'Patrick Dor',
        proffession : 'Transportation Lead',
        description : 'I am responisble for taking and bring the youth back and forth from the church. I manage the schedules of who is driving the bus and when people need to be picked up.',
        profilePicture : imagelocation + 'Patrick-profile.jpeg',
        backgroundPicture : imagelocation + 'Patrick-background.jpeg'
    },
]

// go through each individual in the array
individuals.forEach(e => {
    // create container div
    const cardContainer = document.createElement("div")
    cardContainer.className = 'card'

    // create all the inner elements for the container div

    const backgroundPicture = document.createElement('img')
    backgroundPicture.src = e.backgroundPicture
    backgroundPicture.className = 'card-image'

    const profilePicture = document.createElement('img')
    profilePicture.src = e.profilePicture
    profilePicture.className = 'profile-image'

    const title = document.createElement('h1')
    title.innerText = e.name

    const proffession = document.createElement('p')
    proffession.innerText = e.proffession
    proffession.className = 'job-title'

    const descriptionContainer = document.createElement('div')
    descriptionContainer.className = 'about-container'

    const description = document.createElement('p')
    description.innerText = e.description
    description.className = 'about'
    descriptionContainer.appendChild(description)

    const contactButton = document.createElement('a')
    contactButton.innerText = 'Contact'
    contactButton.data
    contactButton.href = '#'
    contactButton.className = 'btn'

    // add the elements into the container div
    cardContainer.appendChild(backgroundPicture)
    cardContainer.appendChild(profilePicture)
    cardContainer.appendChild(title)
    cardContainer.appendChild(proffession)
    cardContainer.appendChild(descriptionContainer)
    cardContainer.appendChild(contactButton)

    // add the container div to the screen
    document.querySelector('.card-wrapper').appendChild(cardContainer)
})