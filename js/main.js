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
    } else if ( outputnumber.length > 25 )
    {
        $('.bryceoutput').css("font-size","8em");
    } else 
    {
        $('.bryceoutput').css("font-size","10em");
    }
});

$(document).ready(function() {
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
});


/* 
 $('.sharebtn').click(function(){
    $('.imagewrapper').addClass('show');
    
     var canvas = document.getElementById("myCanvas");
     var context = canvas.getContext("2d");
     var input = $('input#bryceinput').val();
     var imageObj = new Image();
     var angle = -0.2;
     var angle2 = 0.05;
     imageObj.onload = function(){
         context.drawImage(imageObj, 10, 10);
         context.font = "60pt Just Another Hand";
         context.setTransform(1, angle2, angle, 1, 0, 0)
         context.fillText(input, 90, 200);
         context.setTransform (1, 0, 0, 1, 0, 0);
     };
     imageObj.src = "img/sharebg.jpg"; 
}); */