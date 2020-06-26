const http = require("http");
const url = require("url");
const jsonBody = require("body/json");
const fs = require("fs");

const formidable = require("formidable");

const services = require("./services");

const server = http.createServer();

server.on("request", (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if(req.method === "GET" && parsedUrl.pathname === "/metadata") {
        const { id } = parsedUrl.query;
        const metadata = services.fetchImageMetadata(id);
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.write(JSON.stringify(metadata));
        res.end();
    } else if(req.method === "POST" && parsedUrl.pathname === "/users") {
        jsonBody(req, res, (err, body) => {
            if(err) {
                console.log(err);
            } else {
                services.createUser(body["userName"]);
            }
        });
    } else if(req.method === "POST" && parsedUrl.pathname === "/upload") {
        const form = new formidable.IncomingForm({
            uploadDir: __dirname,
            keepExtensions: true,
            multiples: true,
            maxFileSize: 5 * 1024 * 1024
        });
        form.parse(req, (err, fields, files) => {
            if(err) {
                res.statusCode = 500;
                res.end("Upload failed, please try again...");
            }

            res.statusCode = 200;
            res.end("Success!");
        });
    } else {
        fs.createReadStream("./index.html").pipe(res);
    }
});

server.listen(8080, () => console.log("Server listening on PORT: 8080"));