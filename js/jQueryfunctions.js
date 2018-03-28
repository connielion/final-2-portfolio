
          // tooltip for navlinks-->
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});



            //HOME PAGE TYPEWRITER FUNCTION-->
var i = 0;
var txt = 'This is my portfolio website.';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//Click/fade

$(document).click(function(){
    $("#typing").slideDown(1000).hide(1000);
})



//SCROLL BACK TO TOP BUTTON JAVASCRIPT-->
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
