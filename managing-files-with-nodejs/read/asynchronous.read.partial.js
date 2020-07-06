const { convertCsv } = require("../exercise-files/csv.parse");
const { open, read } = require("fs");

//fd === file descriptior
open("./exercise-files/data/pulitzer-circulation-data.csv", (err, fd) => {
    if(err) {
        console.log(err);
        return;
    }

    const buffer = Buffer.alloc(200);
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        if(err) {
            console.log(err);
            return;
        }

        console.table(convertCsv(buff.toString()));
    });
});