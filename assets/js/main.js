// //remove # from url address bar
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});

// load each the unchangeble portions
$(function(){
    $("#navbar").load("template/navbar.html"); 
});

$(function(){
    $("#footer").load("template/footer.html"); 
});
