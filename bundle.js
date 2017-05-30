(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{"format_time":2,"get_time":3}],2:[function(require,module,exports){
module.exports = {
  formatHours: function(hours) {
    if (hours > 12){
      formatted_hours = hours - 12
      am_pm = ' pm'
    } else {
      formatted_hours = hours
      am_pm = ' am'
    }
    return [formatted_hours, am_pm]
  },

  formatSec: function(sec) {
    if (sec < 10){
      formatted_sec = '0' + sec
    } else {
      formatted_sec = sec
    }
    return formatted_sec
  },

  formatMin: function(min) {
    if (min < 10){
      formatted_min = '0' + min
    } else {
      formatted_min = min
    }
    return formatted_min
  }
}

},{}],3:[function(require,module,exports){
module.exports = {
  time: function(){
    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    return {hours: hours, min: min, sec: sec}
  }
};

},{}]},{},[1]);
