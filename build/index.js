"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs")); // install type defination file `npm install @types/node`
var matches = fs_1.default
    .readFileSync("football.csv", { encoding: "utf8" })
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
console.log(matches);
