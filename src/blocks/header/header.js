$('#btnPlay').click(function(){
    if($('.video-block')[0].paused){
        $('.video-block')[0].play();
    }
    else{
        $('.video-block')[0].pause();
    }
    
});
