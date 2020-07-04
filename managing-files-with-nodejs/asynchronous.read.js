const { convertCsv } = require("./exercise-files/csv.parse");
const { readFile } = require("fs");

readFile("./exercise-files/data/pulitzer-circulation-data.csv", "utf-8", (err, data) => {
    const values = convertCsv(data);
    console.table(values);
});

