var Notification; // send notitification to gamer


Notification.prototype.vibrate = function(duration){
	// making phone vibrate
	navigator.notification.vibrate(duration)
}


Notification.prototype.alert = function(msg, cbS, title="Alert", buttonName="Ok"){
	if (!title) title = "Alert"
	if (!buttonName) buttonName="Ok"
	navigator.notification.alert(msg, cbS, title, buttonName);
}

Notification.prototype.beep = function(times){
	// Times is the number of events that the phone will beep
	if (!times) times = 1
	navigator.notification.beep(times);
}