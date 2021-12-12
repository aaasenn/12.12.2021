console.log('hello');
let fs = require('fs')
function readMultipleFiles(paths) {
    fs.readFile(paths, {encoding: 'utf-8'}, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
}
console.log(readMultipleFiles("./1.txt")
module.exports.readMultipleFiles;

