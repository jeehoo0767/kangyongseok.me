// fullpase
$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        menu: '#menu',
        autoScrolling:true,
        scrollHorizontally: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        anchors:['Introduce', 'secondPage', 'thirdPage', 'fourPage'],
        sectionsColor: ['#22B473', '#4267B2',  '#F95759', '#f1f1f1'],
        afterLoad: function(origin) {
            if(origin === "secondPage") {
                
            }
        }
    });
    
    //methods
    $.fn.fullpage.setAllowScrolling(true);
});