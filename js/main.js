/*
	Create references to all videos on index.html
*/

var $crossfade = $('#crossfade'),
	$button = $('#button'),
	loop1 = videojs('loop01'),
	loop2 = videojs('loop02'),
	videoArray = [],
	cloneArray = videoArray.slice(0);


/*
	Return a random video from the cloneArray
*/

function getRandomVideo() {

	// Check if cloneArray is empty, if so, reset
	if (cloneArray.length < 1) {
		console.log("All answers played, resetting.");
		cloneArray = videoArray.slice(0);
	}

	// Pick random video from clone array
	var ri = Math.floor(Math.random() * cloneArray.length),
		result = cloneArray[ri];

	// Remove this item from the clone array
	var rs = cloneArray.splice(ri, 1);

	return result;
}


/*
	Crossfade
*/

function crossfade() {
	$crossfade.fadeIn('fast');

	setTimeout(function() {
		$crossfade.fadeOut('fast');
	}, 1000);
}


/*
	Return to Looping videos
*/

function returnToLoops() {
	crossfade();
	loop1.play();
}


/*
	Scan HTML for answer videos and add these to videoArray.
	Create event listeners for each answer video.
*/

$('.video-js').not('.loop-video').each(function(){
	
	// Add to array
	var id = $(this).attr('id');
	videoArray.push(id);


	/*  
		Create event listeners for each video to control playback.
		
		On video end, return to loops
		Reset video play position to 0 every playback
	*/

	videojs(id).on("ended", function(){
		returnToLoops();
	});

	videojs(id).on("play", function(){
		this.currentTime(0);
	});
});

/*
	When first loop video is ready, play it
*/

loop1.ready(function(){
	var myPlayer = this;
	$crossfade.fadeOut('fast');
	myPlayer.play();
});


/*
	When #button is clicked, pause current video and play random answer video
*/

$('#button').on('click', function(){
	var curVideo = $('.vjs-playing').attr('id');

	// Pause loop
	videojs(curVideo).pause();

	// Crossfade
	crossfade();

	// Get random video from cloneArray
	var randomAnswer = getRandomVideo();

	// Play random video from beginning
	videojs(randomAnswer).currentTime(0);
	videojs(randomAnswer).play();
});


/*
	Create event listeners for loop videos

	When one loop video finishes, play the other loop
	Reset video play position to 0 every playback
*/

loop1.on("ended", function(){
	loop2.play();
});

loop1.on("play", function(){
	loop1.currentTime(0);
});

loop2.on("ended", function(){
	loop1.play();
});

loop2.on("play", function(){
	loop2.currentTime(0);
});