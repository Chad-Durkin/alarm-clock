// var currentTime = require('./../alarm-clock.js');

var currentTime;
var alarmTime;
$(document).ready(function(){

function updateTime() {
  var currentTime = moment().format('D. MMMM YYYY H:mm:ss')
  $('#current-time').html(currentTime);
}

setInterval(updateTime, 1000);

  $('#select-time').click(function(event) {
    event.preventDefault();
    alarmTime = $('#time').val();
    console.log(alarmTime);
  });

  if(alarmTime == currentTime){
    $('#alarm').show();
  }
});
