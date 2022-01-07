const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// ========================================================

let data = {
    person: null
}

if (!(sessionStorage.getItem("person") === null)) {
    // edit contact us title to contact the person
    $(".contact-form .title").text(
        `Contact "${sessionStorage.getItem("person")}"`
    );
    // add to stuff to send to the backend
    data.person = sessionStorage.getItem("person");
    // remove it from sessionStorage
    sessionStorage.removeItem("person");
}

const inputValidation = (() => {
    const patterns = {
        name: /^[a-z ]{3,25}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        phone: /^\d{10}$/,
        message: /^[\w !$%?'":,\.()-]+$/i
    }

    const validate = (key, pattern) => {
        // if they do add a valid class
        if (pattern.test(key.value)) {
            $(key).addClass('valid')
            $(key).removeClass('invalid')
        // if they don't then add an invalid class
        } else {
            $(key).addClass('invalid')
            $(key).removeClass('valid')
        }
    }

    // when user types into the inputs
    $('.input').each(() => {
        $(this).keyup(e => {
            // check if they match the patterns
            validate(e.target, patterns[e.target.attributes.name.value])
            
            // color based of if input are valid or not
            $('.invalid').css({
                'color': 'red'
            })
            $('.valid').css({
                'color': '#fff'
            })
        })
    })
})()

isValid = () => {
    let valid = true
    $('.input').each(function() {
        if ($(this).hasClass('invalid')) {
            valid = false
        }
    })
    return valid
}

// submit the form
$('.contact__form').submit(e => {
    e.preventDefault()

    if (isValid()) {
        fetch('https://6zjispevth.execute-api.us-east-1.amazonaws.com/YDJC-api/ydjc-contact', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: $('#sender-name').val(),
                email: $('#sender-email').val(),
                phone: $('#sender-phone').val(),
                message: $('#sender-message').val(),
                person: ($(".contact-form .title").text().includes('\"')) ? $(".contact-form .title").text().split('\"')[1] : null
            })
        })
        .then(response => { return response.json() })  // show loading screen
        .then(data => { alert('success') })  // clear form / remove loading screen
        .catch(error => { alert('error: ' + error) })
    } else {
        // tell the user that form is invalid
        alert('form is invalid')
    }
})