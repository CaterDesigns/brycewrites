$(document).on("keypress", "form", function(event) { 
    return event.keyCode != 13;
});

$('.clear').click(function() {
    $('label.instructions').removeClass('selected');
    $('.input').val('');
    $('.bryceoutput').text($('.input').val());
});

$('.input').on('keyup change', function(){
	$('.bryceoutput').text($(this).val());
    
    $('.addthis_native_toolbox').attr('data-url', 'http://127.0.0.1:8000/index.html?m=' + btoa($('.bryceoutput').text()));
    
    var outputnumber = $('.bryceoutput').text();

    if (outputnumber.length < 10) {
        $('.bryceoutput').css("font-size", "12em");
    } else if (outputnumber.length > 25) {
        $('.bryceoutput').css("font-size", "8em");
    } else {
        $('.bryceoutput').css("font-size", "10em");
    }
    
    addthis.update('share', 'url', window.location.href + btoa($('.bryceoutput').text()));
});


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

$(document).ready(function() {
    // Label mover
    $('input#bryceinput').focus(function(){
        $('label.instructions').addClass('selected');
    });
    
    if ('m' in getUrlVars() ) {
        var getUrl = window.atob(getUrlVars().m);
        $('.bryceoutput').text(getUrl);
        
        $('form').css("display","none");
        $('.createnew').css("display","block");
    } else {
        $('.createnew').css("display","none");
    }
        
    var text_value = $(this).val();
    if(text_value == '')
    {
        $('input#bryceinput').blur(function(){
            $('label.instructions').removeClass('selected'); 
        });  
    }
    
    var outputnumber = $('.bryceoutput').text();

    if (outputnumber.length < 10) {
        $('.bryceoutput').css("font-size", "12em");
    } else if (outputnumber.length > 25) {
        $('.bryceoutput').css("font-size", "8em");
    } else {
        $('.bryceoutput').css("font-size", "10em");
    }
});