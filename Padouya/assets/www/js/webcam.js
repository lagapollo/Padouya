var Webcam = {
	side, // Front or rear camera
	videoStream, 
	flash, 
	resolution, // current resolution of camera
	isVideo	// Bool to know if camera is in photo mode or video mode
}
Webcam.prototype.StartCamera = function(){
	navigator.camera.getPicture( function(imageURI){
			videoStream = imageURI;
		}, 
		function(message){
		},{
			sourceType:this.isVideo
		} );
}

Webcam.prototype.StopCamera = function(){
	navigator.camera.cleanup(function(){},function(msg){
		console.log("impossible to clean the camera : " + msg);
	})
}
