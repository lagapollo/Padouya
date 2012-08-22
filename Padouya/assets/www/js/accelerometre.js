var Accelerometer = {
	x,
	y,
	z,
	refreshDelay=10000,
	watchID
}

Accelerometer.prototype.startWatching = function(){
	this.watchID = navigator.accelerometer.watchAcceleration(function(acceleration){
			this.x = acceleration.x;
			this.y = acceleration.y;
			this.z = acceleration.z;
		},
		function(){
			console.log("Unable to watch acceleration");
		},
		{frequency:this.refreshDelay});
}
Accelerometer.prototype.stopWatching = function(){
	navigator.accelerometer.clearWatch(this.watchID);
}
