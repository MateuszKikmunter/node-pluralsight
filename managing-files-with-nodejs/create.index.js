const { closeSync, openSync, writeSync, readdirSync, watch } = require("fs");
const camelcase = require("camelcase");

//watch for changes in the read directory
watch("./read", () => {
    const indexFd = openSync("./index.js", "w");
    const files = readdirSync("./read");
    
    files.map(file => {
        const name = file.replace("js", "");
        console.log(`Addind a file: ${file}`);
    
        writeSync(indexFd, `module.exports.${camelcase(name)} = require("./read/${name}").read;\n`);
    });
    
    closeSync(indexFd);
});