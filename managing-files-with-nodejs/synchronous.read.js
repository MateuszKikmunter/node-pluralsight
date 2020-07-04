const { convertCsv } = require("./exercise-files/csv.parse");
const { readFileSync } = require("fs");

try {
    const data = readFileSync("./exercise-files/data/pulitzer-circulation-data.csv", "utf-8");    
    console.table(convertCsv(data));
} catch (error) {
    console.log(error);
}
