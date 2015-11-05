$(document).ready(function() {
    
    $(document).on("keypress", "form", function(event) { 
        return event.keyCode != 13;
    });

    // Clear input
    $('.clear').click(function() {
        $('form').removeClass('selected');
        $('.input').val('');
        $('.bryceoutput').text($('.input').val());
    });

    // Change message based on input
    $('.input').on('keyup change', function(){
        $('.bryceoutput').text($(this).val());

        var outputnumber = $('.bryceoutput').text();

        if (outputnumber.length < 10) {
        $('.bryceoutput').css("font-size", "12em");
        } else if (outputnumber.length > 25 && outputnumber.length < 45) {
            $('.bryceoutput').css("font-size", "8em");
        } else if (outputnumber.length > 45) {
            $('.bryceoutput').css("font-size", "6em");
        } else {
            $('.bryceoutput').css("font-size", "10em");
        }

        // $('.addthis_native_toolbox').attr('data-url', 'http://brycewrites.com/?m=' + btoa($('.bryceoutput').text()));
        var currentUrl = window.location;
        $('.sharebtn').attr('href', currentUrl + '?m=' + btoa($('.bryceoutput').text()));
        
    });

    // Query function
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    
    // Label mover
    $('input#bryceinput').focus(function(){
        $('form').addClass('selected');
    });
    
    var text_value = $('input#bryceinput').val();
    if(text_value != '')
    {
        $('input#bryceinput').blur(function(){
            $('form').removeClass('selected'); 
        });  
    }
    
    // Checks for query and hides UI
    if ('m' in getUrlVars() ) {
        var getUrl = window.atob(getUrlVars().m);
        $('.bryceoutput').text(getUrl);
        
        $('form').css("display","none");
        $('.createnew').css("display","block");
        $('.sharebtn').css("display","none");
    } else {
        $('.createnew').css("display","none");
        $('.addthis_native_toolbox').css("display","none");
    }
    
    // Adjusts text size of output for initial load.
    var outputnumber = $('.bryceoutput').text();

    if (outputnumber.length < 10) {
        $('.bryceoutput').css("font-size", "12em");
    } else if (outputnumber.length > 25 && outputnumber.length < 45) {
        $('.bryceoutput').css("font-size", "8em");
    } else if (outputnumber.length > 45) {
        $('.bryceoutput').css("font-size", "6em");
    } else {
        $('.bryceoutput').css("font-size", "10em");
    }
});
/* 
var hashTO;
$('#myTextField').on('keyup', function () {
    if (hashTO !== undefined) {
        clearTimeout(hashTO);
    }
    hashTO = setTimeout(updateHash, 1000);
});

function updateHash() {
    var hashValEncoded = btoa($('#myTextField').val());
    window.location.hash = hashValEncoded;
    $('.testoutput').text(hashValEncoded);
}

$('#myTextField').on('keyup change', function() {
    var hashVal = $('#myTextField').val();
    $('.alphaoutput').text(hashVal);
}); 

$('.sharebtn').on('click', function(evt) {
    evt.preventDefault();
    var $this = $(this),
    target = $this.data('target');

    var querystring = btoa($('.bryceoutput').text());
    $('#wrapper').load(target + ".html?=" + querystring);
});

*/