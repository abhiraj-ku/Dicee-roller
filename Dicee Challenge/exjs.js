//image 1 random generator

var ran = Math.random();
var randomNumber1 = Math.floor((ran * 6) + 1);
var image_source1="images/dice"+ randomNumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",image_source1);

//image 2 randomness

var rantwo=Math.random();
var randomNumber2=Math.floor((rantwo*6)+1);
var image_source2="images/dice"+randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",image_source2);

//logical part start here

if (image_source1 > image_source2) {
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩"; 
    
}else if (image_source2 > image_source1) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
    
}else{
    document.querySelector("h1").innerHTML="It's a Draw 😁"

}

