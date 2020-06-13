import express from "express";

const app = express();
const port = process.env.PORT ?? 123;

app.get("/", (req, res) => {
    res.json({ message: "Hello world!" }).status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${ port }`);
});