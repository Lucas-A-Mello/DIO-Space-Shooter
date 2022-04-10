var mySong = document.getElementById('mySong');
    var icon = document.getElementById('icon-som');
    
    icon.onclick = function() {
         if(mySong.paused) {
               mySong.play();
               icon.src = "img/volume-mute.svg";
         }
         else{
               mySong.pause();
               icon.src = "img/volume-up.svg";
         }
    }