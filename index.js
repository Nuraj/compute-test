import express from "express";

const app = express();

app.get("/", (req, res) => res.send("hello from iagon compute test"));

app.listen(3000, '0.0.0.0', () => {
    console.log('started')
})