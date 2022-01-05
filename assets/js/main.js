const betterLinks=void $(window).on("load",()=>{$('a[href="#"]').click(e=>{e.preventDefault()})}),modifyHead=void $("head").prepend(`
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Malcolm | Smyvens">
        <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque autem possimus optio impedit laborum perspiciatis rerum nisi, quam reiciendis voluptas, veniam aliquid eaque? Amet totam ipsam iure voluptatum nobis.">
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self' https://ka-f.fontawesome.com/releases/v5.15.4/css/; script-src 'self' 'unsafe-inline' https://kit.fontawesome.com/ https://cdnjs.cloudflare.com/; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://unpkg.com/boxicons@2.0.9/css/ https://cdnjs.cloudflare.com/; font-src 'self' https://fonts.gstatic.com/s/ https://unpkg.com/boxicons@2.0.9/fonts/ https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/; frame-src 'self' https://www.google.com/">
        <link rel="icon" type="image/png" href="assets/img/Young-Disciples-logo.png"/>   
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
    `),loadTemplates=$(()=>{$.get("template/navbar.html",e=>{$("#navbar").append(e),$("#navbar").css({position:"absolute",zIndex:1e7}),"/"===location.pathname?$("#nav__link-index").addClass("active-link"):(e=location.pathname.match(/[^\/]+$/)[0].split(".")[0],$("#nav__link-"+e).addClass("active-link"))}),$.get("template/footer.html",e=>{$("#footer").append(e)})}),scrollBtnHandler=($("main").append(`
        <a href="#" class="scrollup" id="scroll-up">
            <i class='bx bx-chevron-up scrollup__icon'></i>
        </a>
    `),$(window).scroll(()=>{200<=this.scrollY?$("#scroll-up").addClass("show-scroll"):$("#scroll-up").removeClass("show-scroll")}),void $("#scroll-up").on("click",()=>{$(window).scrollTop(0)}));