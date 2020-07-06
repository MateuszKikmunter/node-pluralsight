const { createReadStream } = require("fs");

const stream = createReadStream("./exercise-files/data/app.log", { 
    highWaterMark: 9950,
    encoding: "utf-8"
});

stream.on("data", data => {
    stream.pause();
    console.log(data);

    setTimeout(() => {
        stream.resume();
    }, 2000);
});