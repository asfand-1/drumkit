//handle click
for (var i=0; i<document.querySelectorAll(".drum").length; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
}

function handleClick()
{
    var buttonInnerHTML=this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
 
}
// detecting keypress
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key)
{
  switch (key) {
    case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    case "s":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
    case "d":
            var aud= new Audio("sounds/tom-4.mp3");
                    aud.play();
                    break;
case "j":
    var snare= new Audio("sounds/snare.mp3");
    snare.play();
  break;
  case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "l":
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
    default:
        console.log();
        
  }
}

 function buttonAnimation(currentKey)
{
var activeKey= document.querySelector("."+ currentKey);
activeKey.classList.add("pressed");
setTimeout(function()
{
activeKey.classList.remove("pressed"), 300
});
}