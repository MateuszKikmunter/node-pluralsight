const https = require("http");

const data = JSON.stringify({
    userName: "FredFlinston"
});

const options = {
    hostname: "localhost",
    port: 8080,
    path: "/users",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
        "Authorization": Buffer.from("myUsername:myPassword").toString("base64")
    }
};

const request = https.request(
    options,
    (response) => {
        console.log(`statusCode: ${ response.statusCode }`);
        console.log(`headers: ${ response.headers }`);

        response.on("data", (chunk) => {
            console.log("This is a chunk: \n");
            console.log(chunk.toString());
        });
    }
);

request.on("error", (error) => {
    console.log(error);
});

request.write(data);
request.end();