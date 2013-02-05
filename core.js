var fs = require('fs')
	securityCamPath = 'C:\\Storage\\SecurityCam\\';

fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.readdir(securityCamPath, function (err, files) {
	if (err) throw err;
	for(var i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
})