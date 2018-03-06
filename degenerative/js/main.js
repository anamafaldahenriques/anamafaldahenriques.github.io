//while Loading

$(window).load(function(){
    $('.loader').fadeOut(1000);
})

//Ramdomly Change cover img//

var images = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 ,  18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 ];
var longitut = images.length;
var num =1+ Math.floor(Math.random()*longitut);
var foto="img/coverImg/"+num+".png";
foto=foto.toString();

document.getElementById("coverImage").src=foto;


//Ramdomly Change Background Color//
    
    $(document).ready(function() {
    var colors = ["#D8DFE1", "#E9E8DD", "#B0C4B9", "#F7F7F7", "#CDD6CC", "#E5E4D8" , "#DED8CA" , "#C6D7DB" , "#EDE8DC" , "#E4E4DB" , "#ACB4D2" , "#959FAA" , "#ADAAA1" , "#FCE8BB", "#716F70" , "#E0443C" , "#FAE5E0" , "#8E7377" , "#D8E6FC" , "#D9585B" , "#CBCBCB" , "#DDDDDF" , "#FCEED6" , "white" ],
    selectedColor = colors[Math.floor(Math.random()*colors.length)];
    line = $("#counter");
    
    var header = document.getElementById("widget");    
    header.setAttribute('style', 'background-color:'+ selectedColor +'!important');    

    line.css("border-color", selectedColor);
});

//Counter//

var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
 
localStorage.setItem("on_load_counter", n);
 
document.getElementById('counter').innerHTML = n;



//Refresh and keep scroll position

function refreshPage () {
                var page_y = document.getElementsByTagName("body")[0].scrollTop;
                window.location.href = window.location.href.split('?')[0] + '?page_y=' + page_y;
            };

            window.onload = function () {
                if ( window.location.href.indexOf('page_y') != -1 ) {
                    var match = window.location.href.split('?')[1].split("&")[0].split("=");
                    document.getElementsByTagName("body")[0].scrollTop = match[1];
                };
};


//Back To Main Page

var idleSeconds = 60;

$(function(){
  var idleTimer;
  function resetTimer(){
    clearTimeout(idleTimer);
    idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
  }
  $(document.body).bind('mousemove keydown click',resetTimer); //space separated events list that we want to monitor
  resetTimer(); // Start the timer when the page loads
});

function whenUserIdle(){
  
    document.location.href = "/index.html";
    
}