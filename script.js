
    window.onload = function (){
        changeName();deleateName();
        
    }
    var stringIndex = 12;
    var length = 10;
    var speed = 100;
    var speed2 = 1000;
    const name1 ="DING WEN";
    const name2 ="KENNY";
    var ding = true;
    var i =0;
    var music;
    var musicMenu=document.getElementById("musicMenu");
    var mybutton = document.getElementById("toTop");
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function goToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function playMusic(number){
        if(number == 1){
            music = document.getElementById("track1");
            document.getElementById("track2").pause();
            document.getElementById("track3").pause();
        }
        if(number==2){
            music = document.getElementById("track2");
            document.getElementById("track1").pause();
            document.getElementById("track3").pause();

        }
        if(number==3){
            music = document.getElementById("track3");
            document.getElementById("track1").pause();
            document.getElementById("track2").pause();

        }
        music.paused ? music.play(): music.pause();
        music.paused ? musicMenu.classList.remove("jiving"):musicMenu.classList.add("jiving");
    }

    function playTyping() {
        if(ding){
            var audio = new Audio('sound/keyboard1.mp3');
        }else{
            var audio = new Audio('sound/keyboard2.mp3');
        }     
        audio.play();
    }
    
    function changeName(){
        deleateName();
        setTimeout(reset,1000);
        setTimeout(playTyping,1000);
        setTimeout(writeName,1000);
        setTimeout(reset,2000);
        console.log("negating");
        ding = !(ding);
        return;
    
    }

    function reset(){
        console.log("resetting");
        i=0;
        stringIndex = 12;
        return;
    }
    
    function writeName(){
        if(ding){
            if (i < 5) {
                console.log("in ding");
                var char = name2.charAt(i);
                changeText(char,stringIndex);
                stringIndex +=8;        
                i++;
                setTimeout(writeName, speed);
            }
        }else{
            if (i < 8) {
                console.log("in kenny");
                var char = name1.charAt(i);
                changeText(char,stringIndex);
                stringIndex +=8;        
                i++;
                setTimeout(writeName, speed);
                
            }
        }
        return;
    }
    function deleateName() {
        console.log("deleating");
        if (i < length) {
            console.log("deleating here");
            changeText(' ',stringIndex);
            stringIndex +=8;
            i++;
            setTimeout(deleateName, speed);
        }
        return;
    }

    function replaceChar(origString, replaceChar, index)
        {
            let firstPart = origString.substr(0, index);
            let lastPart = origString.substr(index + 1);
            let newString = firstPart + replaceChar + lastPart;
             
            return newString;
        }
 
        function changeText(newChar,index) {
            originalText = document.getElementById("firstName").innerHTML;
            charReplaced = replaceChar(originalText, newChar, index);
            document.getElementById("firstName").innerHTML= charReplaced;
    }

var app = document.getElementById('clickMe');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: ' '
});


// Get the resumeModal
var resumeModal = document.getElementById("resumeModal");

// Get the button that opens the resumeModal
var resume = document.getElementById("resume");

// Get the <closeBtn> element that closes the resumeModal
var closeBtn = document.getElementsByClassName("closeResume")[0];

// When the user clicks the button, open the resumeModal 
resume.onclick = function() {
  resumeModal.style.display = "block";
}

// When the user clicks on <closeBtn> (x), close the resumeModal
closeBtn.onclick = function() {
  resumeModal.style.display = "none";
}

function close(){
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the resumeModal, close it

    
typewriter.typeString('Hover and click on my name!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Call me Kenny!')
    .pauseFor(1000)
    .start();

    