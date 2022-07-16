import express from "express";
import { URLController } from "./controller/URLController";
import { MongoConection } from "./database/MongoConection";

const api = express()
api.use(express.json())

const database = new MongoConection();
database.conect();

const urlController = new URLController();
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect)
api.listen(5000, () => console.log("Express listening"))