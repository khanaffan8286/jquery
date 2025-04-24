// $(document).ready(function() {
//     $('#menuToggle').click(function() {
//         $('#sidebar').toggle(1000);
//     });
// });

// $(document).ready(function() {
//     $('#menuToggle').click(function() {
//         $('#sidebar').fadeToggle(2000);
//     });
// });

$(document).ready(function() {
    $('#menuToggle').click(function() {
        $('#sidebar').slideUp(2000);
    });
});


$(document).ready(function() {
    $('#menuToggle').click(function() {
        $('#sidebar').slideToggle(2000);
    });
});


$(document).ready(function() {
    $('#show').click(function(){
        $('#parahgraph').show(1000);
    });
    $('#hide').click(function(){
        $('#parahgraph').hide(1000);
    });
})

$(document).ready(function() {
    $('#showhide').click(function() {
        $('#parahgraph').fadeToggle(1000);
    });
});


$(document).ready(function() {
    $('#moveright').click(function() {
        $('.dev').animate({right:'650px',opacity: 0.3},3000);
        
    })
});

$(document).ready(function() {
    $('#stop').click(function() {
        $('.dev').stop();
    });
});

$(document).ready(function() {
    $('#moveleft').click(function() {
        $('.dev').animate({right:'230px'},3000);
    })
})

