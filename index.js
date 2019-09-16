$(function(){
    var arr1 = ["home-navBar", "about-navBar", "team-navBar", "work-navBar", "services-navBar","features-navBar", "contact-navBar"];
    var arr2 = ["home", "about", "team", "work", "services","features", "contact"];
        $(document).scroll(function(){
            for (let i = 6; i>=0; i--) {
            if($(this).scrollTop() >= $("#" + arr2[i]).offset().top - 190){
            $("#"+arr1[i]).addClass("ghost-button-home");
            for (let j = i; j>=0; j--){
             $("#"+arr1[(j-1)]).removeClass("ghost-button-home");}
            break;


        } if ($(this).scrollTop() < $("#"+arr2[i]).offset().top) {
            $("#"+arr1[i]).removeClass("ghost-button-home");
        }
    }
    });
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

