
// $(function() {
//   $(".button").click(function() {
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     $("body").css("background-color", '#' + randomColor);
//     console.log(randomColor);
//   })
// });

$("div").click(function (e) {
  
  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();
  
  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  
 // Make it round!
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  
 let randomColor = Math.floor(Math.random()*16777215).toString(16);

  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px',
    background: '#' + randomColor,
  })

  // $("div").css("background-color", '#' + randomColor);
  // $(".div").css({
  //   background: '#' + randomColor,
  // })


  // $(".keyframe.rippleDrop").css([{
  //   100% {transform: + scale (Math.random()), 
  // });
  .addClass("rippleEffect");
  $("div").animate({
      fontSize: "24px"

    });
  // $("div").css("background-color", '#' + randomColor);
});

// $.keyframe.rippleDrop([{
//     '100%: transform:' + scale(Math.random())



