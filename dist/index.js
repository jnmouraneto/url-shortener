"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URLController_1 = require("./controller/URLController");
const MongoConection_1 = require("./database/MongoConection");
const api = (0, express_1.default)();
api.use(express_1.default.json());
const database = new MongoConection_1.MongoConection();
database.conect();
const urlController = new URLController_1.URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(5000, () => console.log("Express listening"));
//# sourceMappingURL=index.js.map