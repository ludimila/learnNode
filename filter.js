//node, caminho, parametros


var fs = require('fs')
var file = process.argv[2]
var endFile = process.argv[3]


fs.readdir(file, function (err, contents) {
	if (err){
		console.log("Deu Bad")
	}else{
		 contents.filter(function (item){ 
             return item.indexOf('.' + endFile) >= 0 //procura . e a extensão no fim do array
         }).forEach(function (item) {
             console.log(item);
         })
     }
 });
 