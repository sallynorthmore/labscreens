/*
    Create references to all videos on index.html
*/

var $crossfade = $('#crossfade'),
    $button = $('#button'),
    loop1 = videojs('loop01'),
    loop2 = videojs('loop02'),
    answer1 = videojs('answer01'),
    answer2 = videojs('answer02'),
    answer3 = videojs('answer03'),
    answer4 = videojs('answer04'),
    answer5 = videojs('answer05'),
    answer6 = videojs('answer06'),
    videoArray = ["answer01", "answer02", "answer03", "answer04", "answer05", "answer06"],
    cloneArray = videoArray.slice(0);

/*
    When first loop video is ready, play
*/

loop1.ready(function(){
  var myPlayer = this;
  $crossfade.fadeOut('fast');
  myPlayer.play();
});


/*
    When #button is clicked, pause current video and play random answer video
*/

$(document).ready(function(){

    $('#button').on('click', function(){
        var curVideo = $('.vjs-playing').attr('id');
        // console.log("Button clicked! Current video: " + curVideo);

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
});


/*
    Return a random video from the cloneArray
*/

function getRandomVideo() {

    if (cloneArray.length < 1) {
        console.log("All answers played, resetting.");
        cloneArray = videoArray.slice(0);
    }

    // Pick random video from clone array
    var ri = Math.floor(Math.random() * cloneArray.length),
        result = cloneArray[ri];

    // Pop this item from the clone array
    var rs = cloneArray.splice(ri, 1);
    // console.log("New cloneArray length is " + cloneArray.length);

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
    When one loop video finishes, play the other loop
    Reset video play position to 0 every playback
*/

loop1.on("ended", function(){

    crossfade();

    loop2.currentTime(0);
    loop2.play();
});

loop1.on("play", function(){
    loop1.currentTime(0);
});

loop2.on("ended", function(){

    crossfade();

    loop1.currentTime(0);
    loop1.play();
});

loop2.on("play", function(){
    loop2.currentTime(0);
});


/*  
    Create event listeners for each video to control playback.
    
    On video end, return to loops
    Reset video play position to 0 every playback
*/

answer1.on("ended", function(){
    returnToLoops();
});

answer1.on("play", function(){
    answer1.currentTime(0);
});

answer2.on("ended", function(){
    returnToLoops();
});

answer2.on("play", function(){
    answer2.currentTime(0);
});

answer3.on("ended", function(){
    returnToLoops();
});

answer3.on("play", function(){
    answer3.currentTime(0);
});

answer4.on("ended", function(){
    returnToLoops();
});

answer4.on("play", function(){
    answer4.currentTime(0);
});

answer5.on("ended", function(){
    returnToLoops();
});

answer5.on("play", function(){
    answer5.currentTime(0);
});

answer6.on("ended", function(){
    returnToLoops();
});

answer6.on("play", function(){
    answer6.currentTime(0);
});
