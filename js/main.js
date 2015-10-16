$(document).on("keypress", "form", function(event) { 
    return event.keyCode != 13;
});

$('.input').keyup(function(){
	$('.clear').click(function() {
        $('label.instructions').removeClass('selected');
		$('.input').val('');
		$('.bryceoutput').text($('.input').val());
	});
	$('.bryceoutput').text($(this).val());
    
    var outputnumber = $('input#bryceinput').val();

    if( outputnumber.length < 10 )
    {
        $('.bryceoutput').css("font-size","12em");
    } else if ( outputnumber.length > 30 )
    {
        $('.bryceoutput').css("font-size","8em");
    } else 
    {
        $('.bryceoutput').css("font-size","10em");
    }
});

// Label mover
$('input#bryceinput').focus(function(){
    $('label.instructions').addClass('selected');
});

var text_value = $(this).val();
if(text_value == '')
{
    $('input#bryceinput').blur(function(){
        $('label.instructions').removeClass('selected'); 
    });  
}