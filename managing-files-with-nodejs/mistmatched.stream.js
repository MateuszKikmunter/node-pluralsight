//handling situation when streams are mismatched, i.e. one is faster than the other

const { createReadStream, createWriteStream } = require("fs");

const stream = createReadStream("./exercise-files/data/stream.log", { encoding: "utf-8" });
const writer = createWriteStream("./exercise-files/data/output.stream.log");


//this breaks because of the backed pressure
let iteration = 0;

stream.on("data", data => {
    console.log(++iteration);
    writeData(data);
});

const writeData = data => {
    //simulate really slow write stream
    setTimeout(() => {
        writer.write(data);
    }, 60000);
};

//this works thanks to piping
const readStream = createReadStream('./data/stream.log', {
    encoding: "utf8"
});

const writer = createWriteStream("./data/output.log");

readStream.pipe(writer);