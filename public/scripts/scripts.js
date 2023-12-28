$(document).ready(function() {
    var path = window.location.pathname;
    $("header a").each(function() {
        var href = $(this).attr('href');
        if (path === href) {
            $(this).find("button").addClass("navbar-clicked");
        }
    });
});

$("textarea").keyup(function(e) {
    while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
        $(this).height($(this).height()+1);
    };
});