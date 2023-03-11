buttonColours=["red","blue","green","yellow"];
gamePattern=[];
userClickedPattern=[];
var level=0;

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    
      userClickedPattern.push(userChosenColour);
      check();
      playSound(userChosenColour); 
      animatePress(userChosenColour);
      if(start==1)
      {
        playSound("wrng");
      }
});
function check()
{
  var i=userClickedPattern.length;
  for(var j=0;j<i;j++)
  {
    if(gamePattern[j]!=userClickedPattern[j])
    {
      $("h1").text("Game Over Press Any Key to Restart");
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
        }, 100);
      gamePattern=[];
      userClickedPattern=[];
      start=1;
      break;
    }
  }
  if(i==level&&start!=1)
  {
    userClickedPattern=[];
    setTimeout(function(){
      nextSequence();
      }, 60);
    
  }
}
function playSound(name)
{
    switch (name) {
        case "wrng":
          var tom = new Audio("sounds/wrong.mp3");
          tom.play();
          break;
    
        case "green":
          var tom1 = new Audio("sounds/green.mp3");
          tom1.play();
          break;
    
        case "red":
          var tom2 = new Audio("sounds/red.mp3");
          tom2.play();
          break;
    
        case "yellow":
          var tom3 = new Audio('sounds/yellow.mp3');
          tom3.play();
          break;
    
        case "blue":
          var tom4 = new Audio('sounds/blue.mp3');
          tom4.play();
          break;
        default: 
        console.log(name);
    
      }

}
function nextSequence()
{
    level+=1;
    var change="Level "+(level);
    $("h1").text(change);
    var randomNumber=Math.random();
    randomNumber*=4;
    randomNumber=Math.floor(randomNumber);
    console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var inp="#"+randomChosenColour;
    $(inp).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var temp=$(inp).attr("id");
    console.log(temp);
    playSound(temp);
}
function animatePress(currentColour)
{
    
    var mid="#"+currentColour;
    console.log(mid);
    $(mid).addClass("pressed");
    setTimeout(function(){
      $(mid).removeClass("pressed");
  }, 100);

}
var start=1;
$(document).keypress(function(event){
  if(start==1)
  {
    level=0;
    nextSequence();
    start=0;
  }
})