var random1 = Math.floor(Math.random()*6+1);

var randomImage1="images/dice" +random1+".png";

//console.log(randomImage1);

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1 );




var random2 = Math.floor(Math.random()*6+1);
var randomImage2="images/dice" +random2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2 );


if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 Win";

}else{
    document.querySelector("h1").innerHTML="Draw!!";
}