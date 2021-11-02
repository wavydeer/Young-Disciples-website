const navSlide = () =>{
    const navLines = document.querySelector('.nav-lines');
    const navButton = document.querySelector('.nav-button');
    const navNewButton = document.querySelectorAll('.nav a');
    
    navLines.addEventListener('click',() => {

        //toggle Nav
        navButton.classList.toggle('nav-lines-container-active');

        //Animate Links
        navNewButton.forEach((link, index) => {
           if (link.style.animation) {
                link.style.animation = '';
           } else {
               link.style.animation = `navButtonFade 0.5s ease fowards ${index / 7}s`;
           }
        });
        //Lines Animtion
        navLines.classList.toggle('toggle');
    });
}  
navSlide();