
var fs = require('fs') 

/*
  You must write a module file to do most of the work. The module must  
  export a single function that takes three arguments: the directory name,  
  the filename extension string and a callback function, in that order. The  
  filename extension argument must be the same as what was passed to your  
  program. 
 */

 //tipo um retorno para funcao assincrona
module.exports = function findExtension(directory, fileExtension, callback(err, contents)){
fs.readdir(directory, function (err, contents) {
	if (err){
		console.log("Deu Bad", err)
	}else{
		 var result = contents.filter(function (item){ 
             return item.indexOf('.' +  fileExtension) >= 0 //procura . e a extensão no fim do array
         })
       return callback(null, result);
     }
 });
}




 