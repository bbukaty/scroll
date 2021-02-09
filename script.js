window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};


function reachPresent() {
    document.body.style.backgroundColor = "black";
    $(".you:not(#love,#today)").removeAttr("id").addClass("forgotten");
    $("#love").prop("id","memory");
    $("p").text("");
}

var today = false;    
$(window).scroll(function(){
    while ($(window).scrollTop() >= $(document).height()-2*$(window).height()){
        if (!today) {
            today = true;
            reachPresent();
        }
        $("#today").css({"padding-bottom":"+=10"})
    }
    if (today && $("#memory").isInViewport()) {
        $("#memory").fadeOut(14000, "linear");
    }
});