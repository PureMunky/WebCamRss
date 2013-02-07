var http = require('http'),
	fs = require('fs'),
	securityCamPath = 'C:\\Storage\\SecurityCam\\',
	logFile = 'log.txt';

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
	
	writeServerLog(request);
}).listen(8124);


var writeServerLog = function (request) {
	var logMsg,
		now = new Date();
		
	logMsg = now + ' - ' + request.method + ' - ' + request.url + ' from ' + request.headers['host'];
	
	fs.appendFile(logFile, logMsg + '\n'), function (err) {
		if (err) throw err;
		console.log(logMsg);
	};
};

console.log('Server started');
