$(document).ready(function() {
		// load song into memory first
		$('#cool-sound')[0].load();
		/* on mouse over 
	—> mouseenter—> display ryu-ready (and hide verifying else)
	—> mouseleave —> display ryu-still (and hide verifying else) */
		
		$('.ryu').mouseenter(function() {
		    $('.ryu-action').hide();
		    $('.ryu-ready').show();
		  });
		$('.ryu').mouseleave(function() {
		    $('.ryu-action').hide();
		    $('.ryu-still').show();
		  });
/* on click 
	—> mousedown —> display ryu-throwing (and hide verifying else)
—> mouseup —> display ryu-still (and hide verifying else)*/
		$('.ryu').mousedown(function() {
		    playHadouken();
		    $('.ryu-action').hide();  
		    $('.ryu-throwing').show();
		    $('.hadouken').finish().show().animate(
		    	{'left': '1081px'},
		    	1000,
		    	function() {
		    		$(this).hide();
		    		$(this).css('left', '581px')
		    	}
		    	);
		  });
		$('.ryu').mouseup(function() {
		    $('.ryu-action').hide();
		    $('.ryu-still').show();
		  });
/* on key press 
	—> keydown —> display ryu-cool (and hide verifying else)
—> keyup —> display ryu-still (and hide verifying else)*/
        $(document).keydown(function(key) {
		    if (key.keyCode == 88) {
		      playCool();
		      $('.ryu-action').hide();
		      $('.ryu-cool').show();
		    }   
		  });
		$(document).keyup(function(key) {
		    if (key.keyCode == 88) {
		      pauseLoad();
		      $('.ryu-action').hide();
		      $('.ryu-still').show();
		    }
		  });
/* Sound Functions */
	function playHadouken () {
		/*alert ('playing-hadouken')*/
		$('#hadoken-sound')[0].volume = 0.5; //set the volume
		$('#hadoken-sound')[0].load(); //load the sound into the memory
		$('#hadoken-sound')[0].play(); //play it
	}
	function playCool () {
		//alert ('playing-cool');
		$('#cool-sound')[0].volume = 0.5; //set the volume
		 //song loaded into memory first
		$('#cool-sound')[0].play(); //play it
	}
	function pauseLoad () {
		$('#cool-sound')[0].pause();
        $('#cool-sound')[0].load();
	}
});

