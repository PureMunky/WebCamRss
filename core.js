var http = require('http'),
	fs = require('fs'),
	securityCamPath = 'C:\\Storage\\SecurityCam\\';

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  fs.readdir(securityCamPath, function (err, files) {
		if (err) throw err;
		for(var i = 0; i < files.length; i++) {
			var f = files[i];
			if(f.indexOf('.jpg') != -1) {
				console.log(files[i]);	
			}
		}
	});
	
  response.end('Hello World\n');
}).listen(8124);