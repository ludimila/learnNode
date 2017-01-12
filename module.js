var module = require('./list.js')  
var file = process.argv[2]
var endFile = process.argv[3]

module(file,  endFile, function callback(err, contents) {
 if (err) {
	console.log("Deu Bad", err)
  }else{
 	contents.forEach(function(item) {
    console.log(item);
  });
 }
}


