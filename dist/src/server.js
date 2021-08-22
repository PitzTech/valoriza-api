"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("../db");
var app = express_1.default();
app.listen(3000, function () {
    console.log("🚀 Server started on port 3000!");
});
