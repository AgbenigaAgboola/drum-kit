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
       var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("/sounds/crash.mp3");
                crash.play();
                break;

            case "a":
                var kick = new Audio("/sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
                var snare = new Audio("/sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                var tom1 = new Audio("/sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("/sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("/sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("/sounds/tom-4.mp3");
                tom4.play();
                break;
            default:
                break;
        }
        
}

}
