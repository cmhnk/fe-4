
var formatTime = require('format_time');
var getTime = require('get_time');

$(function(){
  $('.go').on('click', function(event){
    t = getTime.time()
    // console.log(formatTime.formatHours(10));
    // console.log(t['min']);
    // console.log(t['hours']);
    $('.clock').text(formatTime.formatHours(t['hours'])[0] + ':' + formatTime.formatMin(t['min']) + ':' + formatTime.formatSec(t['sec']) + formatTime.formatHours(t['hours'])[1] );
  });
});
