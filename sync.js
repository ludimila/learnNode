var fs = require('fs') ////require lets the machine know to use a specific module for your code to work
var file = fs.readFileSync(process.argv[2]) //readFileSync() returns the contents of a file as a buffer/array object
var lines = file.toString().split('\n').length - 1 //toString converts an array/buffer into a string, split() splits a string into an array, splitting up objects based on the contents of the brackets ()

console.log(lines)