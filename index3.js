"use strict";


function Clock() {
  	this.date = new Date();
}

Clock.prototype.start = function() {
	const thisClock = this;
  	setInterval(function() {
    	thisClock.date = new Date();
  	}, 1000);
}
Clock.prototype.getTime = function() {
  	return this.date.toLocaleTimeString();
}

const myClock = new Clock();

myClock.start();
console.log(myClock.getTime());

setTimeout(function() {
  	console.log(myClock.getTime());
}, 5000);




function AlarmClock(){
	Clock.call(this);
}
AlarmClock.prototype = Object.create(Clock.prototype);
AlarmClock.prototype.constructor = AlarmClock;
AlarmClock.prototype.setAlarmTime = function(alarmTime){
	this.alarmTime = alarmTime;
}
AlarmClock.prototype.start = function() {
  const thisAlarmClock = this;
  setInterval(function() {
    thisAlarmClock.date = new Date();
    if(thisAlarmClock.getTime() === thisAlarmClock.alarmTime){
		  alert('Alarm!!!');
    }
	}, 1000);
}
