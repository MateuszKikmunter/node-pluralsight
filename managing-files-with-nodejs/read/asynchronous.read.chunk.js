const fs = require("fs");

module.exports.read = () => {
    let totalSize = 0;

    //get size of the file
    fs.stat("./exercise-files/data/app.log", (error, { size }) => totalSize = size);

    fs.open("./exercise-files/data/app.log", (error, fd) => {
        const buffer = Buffer.alloc(200);

        for (let i = 0; i <= totalSize / buffer.length; i++) {
            fs.read(fd, buffer, 0, buffer.length, i * buffer.length, (error, count, buff) => {
                console.log(buff.toString());
            });
        }

    });
};