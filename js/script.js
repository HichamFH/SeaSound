$("body").niceScroll();

audio = new Audio('audio/rain.mp3');
audio.loop = true;
$('#pause').hide();

$('#play').click(function(){
    audio.play();
    $('#play').hide();
    $('#pause').show();
});

$('#pause').click(function(){
    audio.pause();
    $('#pause').hide();
    $('#play').show();
});

console.log(audio);