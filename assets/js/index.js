$(document).ready(function() {

    // Displaying and hiding top button on user scroll windows
    // When the user scrolls down 20px from the top of the document, show the button
    $(window).on("scroll", document, function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#goTop").show();
        } else {
            $("#goTop").hide();
        }
    });


    $(document).on("click", "#goTop", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });


});