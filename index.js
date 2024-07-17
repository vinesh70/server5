const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req,res) => {
	const url = "mongodb+srv://vineshryapak1234:7rh9Zl1LYXMvJSni@cluster0.dmt5jji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("StudentSuccessStory");
	const coll = db.collection("student");
	const record = {"name": req.body.name, "company": req.body.company, "pkg": req.body.pkg};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () => {console.log("Server Listening @ 9000")});