var fs = require('fs')
	securityCamPath = 'C:\\Storage\\SecurityCam\\';

fs.readdir(securityCamPath, function (err, files) {
	if (err) throw err;
	for(var i = 0; i < files.length; i++) {
		var f = files[i];
		if(f.indexOf('.jpg') != -1) {
			console.log(files[i]);	
		}
	}
})