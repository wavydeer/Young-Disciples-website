$(document).ajaxComplete(()=>{$(".nav__header").css({background:"transparent",boxShadow:"none"}),$("body").css({margin:"unset"}),$(window).scroll(()=>{window.scrollY>=$(".indexHeader").height()/2?$(".nav__header").css({background:"var(--color-container)",boxShadow:"0 0 10px black"}).addClass("navbar-scroll"):$(".nav__header").css({background:"transparent",boxShadow:"none"}).removeClass("navbar-scroll")})}),$(".photo-item .button").on("click",a=>{sessionStorage.setItem("person",$(a.target).parent("div").attr("data-person")),window.open("contact.html")});