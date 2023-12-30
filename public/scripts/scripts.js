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

function loadBlog(index) {
    // Send an AJAX request to the server to fetch blog content for the selected index
    fetch(`/blogs/${index}`)
        .then(response => response.text())
        .then(data => {
            // Update the HTML with the fetched blog content
            $("#blog-content").html(data);
        })
        .catch(error => console.error('Error:', error));
}