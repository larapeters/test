$(document).ready(function(){

    $('.video-js').each(function(i){
        var myPlayer = videojs('video-'+i);
        var fwdbtn =  document.getElementById("forward");
        var backbtn = document.getElementById("rewind");
        var playpause = document.getElementById("playpause");

        console.log('ready!');

        myPlayer.ready(function(){

            $(playpause).click(function(event){
            event.preventDefault();
            if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.playimg').attr('src','/assets/darkplaybutton.png');
            myPlayer.pause();
            } else{
            $(this).addClass('active');
            $('.playimg').attr('src','/assets/darkpausebutton.png');
            myPlayer.play();
            }
            });

            $( "#darkdialog" ).dialog({
            autoOpen : false,
            modal : true, 
            show : "puff", 
            hide : "puff",
            width : 400, 
            height : 400,
            dialogClass: "no-close",
            dialogClass: 'ui-dialog-osx',
            create: function (event) {
                $(event.target).parent().css('position', 'fixed'); 
            },
            resizeStart: function (event) {
                $(event.target).parent().css('position', 'fixed'); 
            },
            resizeStop: function (event) {
                $(event.target).parent().css('position', 'fixed'); 
            }
        });
            
        myPlayer.on('timeupdate', function(){
            var duration = myPlayer.duration();
            var time = myPlayer.currentTime();
            console.log(time);
            if (time>=duration){
                $("#darkdialog").dialog("open");
                console.log("einde");
                $('.playimg').attr('src','/assets/playbutton.png');
            }
            });

            $(backbtn).click(function(event){
            event.preventDefault();
            myPlayer.currentTime(myPlayer.currentTime() - 10);
            });

            $(fwdbtn).click(function(event){
            event.preventDefault();
            myPlayer.currentTime(myPlayer.currentTime() + 10);
            });
    });
    }); 
    
    var icons = {
     header: "darkIconClosed",
     activeHeader: "darkIconOpen"
    };

    $( "#darkaccordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        icons: icons
    });
});