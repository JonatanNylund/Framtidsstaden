var visadBild = 0;
let allaBilder = ["../img/300x300.png", "../img/450x450.png", "../img/img-placeholder.png", "../img/logo.png", "../img/park.jpeg", "../img/park.png", "../img/present-placeholder.png" ]
function byt() {
    visadBild++;
    if (visadBild == 7) {
        visadBild = 0
    }
    document.getElementById("2sec2img").src = allaBilder[visadBild]
}


function shownav(){
    document.getElementsByClassName("navbar").style = ("visibility: visible:");
}


function navhide() {
    var x = document.getElementsByClassName("navbar")[0];
    if (x.style == "visibility: visible;") {
        x.style = "visibility: hidden;"
    } else {
      x.style = "visibility: visible;"
    }
}