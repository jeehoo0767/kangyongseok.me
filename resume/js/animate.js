$(document).ready(function() {
    $('.js-circle').animate({
        left: "20rem",
        opacity:1
    }, 1000, function() {
        $('.js-intro-box').animate({
            opacity:1,
            top:"15rem"
        }, 1000)
    })
})
