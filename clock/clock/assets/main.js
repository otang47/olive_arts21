$(function() {
  var $clockText = $('#clock-text');
  var $clockTextTwo = $('#clock-textTwo');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $clockText.html("I am: " + h + ":" + m + ":" + s + ":" + ms);
    $clockTextTwo.html("Yumiko is: " + (13 + h) + ":" + m + ":" + s + ":" + ms);
    $hour.css('transform', 'rotate(' + (360/60 * h) + 'deg)');
    $minute.css('transform', 'rotate(' + (360/60 * m) + 'deg)');
    $second.css('transform', 'rotate(' + ((360/60 * h) + 210) + 'deg)');
    // $otherTime.css('transform', 'rotate(' + (360/60 * s) + 'deg)');
    setTimeout(updateClock, clockUpdateSpeed);
  }

  updateClock();
});