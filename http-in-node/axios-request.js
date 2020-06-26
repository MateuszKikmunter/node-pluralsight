const fs = require("fs");
const axios = require("axios");

axios({
    method: "GET",
    url: "https://www.google.com",
    responseType: "stream"
}).then(response => {
    response.data.pipe(fs.createWriteStream("google.html"));
}).catch(error => {
    console.log(error);
});

axios({
    method: "POST",
    url: "http://localhost:8080/users",
    data: {
        userName: "Matt"
    },
    transformRequest: (data, headers) => {
        const newData = {
            userName: `${data.userName}!`
        };
        return JSON.stringify(newData);
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

axios.all([
    axios.get("http://localhost:8080/metadata?id=1"),
    axios.get("http://localhost:8080/metadata?id=1")
]).then((responseArray) => {
    console.log(responseArray[0].data.description);
    console.log(responseArray[1].data.description);
});