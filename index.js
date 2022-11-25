for( var i =0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
var bcolor = [];
bcolor.push("10px solid green");
bcolor.push("10px solid red");
bcolor.push("10px solid blue");
bcolor.push("10px solid yellow");
bcolor.push("10px solid orange");
bcolor.push("10px solid violet");
bcolor.push("10px solid pink");
bcolor.push("10px solid peach");
bcolor.push("10px solid silver");

var colorNumber;

    function handleClick(){
        colorNumber =Math.floor(Math.random()*bcolor.length);

       this.style.border =bcolor[colorNumber];
        var audio = new Audio("/sounds/tom-1.mp3");
        audio.play();
}

}
