const { writeFile } = require("fs");
const { appendFile } = require("fs");

writeFile("./exercise-files/data/app.log", '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512', {
    flag: "a" //a for append
},(err) => {
    err ? console.log(err) : console.log("File saved!");
});

appendFile("./exercise-files/data/app.log", '/n 163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test-with-append-file" 405 21512',(err) => {
    err ? console.log(err) : console.log("File saved!");
});