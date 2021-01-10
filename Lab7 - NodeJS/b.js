var fs = require("fs");
var dir = "dir";
let wait = false;

fs.watch(dir, (eventType, filename) => {
    if(wait) return;
    wait = setTimeout(() => wait = false, 1000);
    console.log("Change detected in file " + filename + ":");

    fs.readFile(dir +"\/" + filename, (err, data) => {
        if (!err) console.log(data.toString());
    });
});