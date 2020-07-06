const { convertCsv } = require("../exercise-files/csv.parse");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

module.exports.read = () => {
    readFile("./exercise-files/data/pulitzer-circulation-data.csv", "utf-8")
        .then(data => console.table(convertCsv(data)))
        .catch(error => console.log(error));

    const read = async () => {
        const data = await readFile("./exercise-files/data/pulitzer-circulation-data.csv", "utf-8");
        console.table(convertCsv(data));
    };

    read();
};