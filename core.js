var http = require('http'),
	fs = require('fs'),
	securityCamPath = 'C:\\Storage\\SecurityCam\\';

http.createServer(function (request, response) {
 	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Start of List\n');
	
	fs.readdir(securityCamPath, function (err, files) {
		if (err) throw err;
		for(var i = 0; i < files.length; i++) {
			var f = files[i];
			if(f.indexOf('.jpg') != -1) {
				response.write(files[i] + '\n');	
			}
		}
		response.end('End of List\n');
	});
	
	console.log('Server Accessed');
}).listen(8124);

console.log('Server started')
