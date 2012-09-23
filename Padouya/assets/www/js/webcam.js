var Webcam = {
	side, // Front or rear camera
	videoStream, 
	flash, 
	resolution, // current resolution of camera
	isVideo,	// Bool to know if camera is in photo mode or video mode
	id
}
Webcam.prototype.StartCamera = function(){
	id = navigator.camera.getPicture( function(imageURI){
			videoStream = imageURI;
		}, 
		function(message){
			console.log("impossible to start camera")
		},{
			sourceType:this.isVideo
		} );
}

Webcam.prototype.StopCamera = function(){
	// MEthod only supported by iOS
	//if (IOS)
	navigator.camera.cleanup(function(){e
		console.log("camera cleaned");
	},function(msg){
		console.log("impossible to clean the camera : " + msg);
	})
}
