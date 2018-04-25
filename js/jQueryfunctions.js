
          // tooltip for navlinks-->
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});



            //HOME PAGE TYPEWRITER FUNCTION//
var i = 0;
var txt = "Welcome to my portfolio website. I trying to git good front-end development. I know looks boring right now, so...sorry. Anyways, how do you like that carousel? ...Lovely, right?...Click this body of text after reading.";
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




/*Click/fade and CLOSE NAVBAR-TOGGLE MENU AFTER Click*/
$(document).ready(function () {
  $("#typing").click(function(){
      $("#typing").slideDown(1000).hide(2000);/* SLIDE DOWN/HIDE ON CLICK */
  })
  $("#typing").click(function(){
        $("#typing").stop();
    });
})
  $(".navlink").click(function(){
    $(".navbar-toggle").hide();    /*HIDE MENU AFTER CLICKING LINK */
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

    /* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
