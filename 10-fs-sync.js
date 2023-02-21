// read file from dir/ file path

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// write to file , create if doesnt exist

writeFileSync('./content/result-sync.txt',
 `hello: ${first},${second}`,
 {flag: 'a'})// flag to continue write ( delete to  overwrite )

 console.log(first,second)