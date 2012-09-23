var Compass = {
	orientation,
	id
}

Compass.prototype.watchOrientation = function(){
	id=navigator.compass.watchHeading(function(heading){
		orientation = heading.magneticHeading;
	},
	function(){
		console.log("impossible to watch current orientation");

	}),
	// Options
	{
		frequency : 500;
	}
}

Compass.prototype.stopWatchingOrientation = function(){
	if (id){
		navigator.compass.clearWatch(id)
		id = null
	}
}