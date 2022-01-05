const imagelocation="assets/img/",getLeaders=void $.getJSON("assets/json/leaders.json",a=>{$(a.individuals).each((a,s)=>{var{name:t,proffession:e,description:i,profilePicture:c,backgroundPicture:s}=s;$(".card-wrapper").append(`
                <div class="card" data-person="${t}">
                    <img src= ${imagelocation}${s} class="card-image" alt="">
                    <img src= ${imagelocation}${c} class="profile-image" alt="">
                    <h1 class="card-title">${t}</h1>
                    <p class="job-title">${e}</p>

                    <div class="about-container">
                        <p class="about">
                            ${i}
                        </p>
                    </div>

                    <a class="btn">Contact</a> 
                </div>
            `)}),$(".card .btn").on("click",a=>{sessionStorage.setItem("person",$(a.target).parent(".card").attr("data-person")),window.open("contact.html")})});