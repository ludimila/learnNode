var soma = 0

for (var i = 2; i < process.argv.length; i++) {
	soma+=+process.argv[i]
}

console.log(soma)
