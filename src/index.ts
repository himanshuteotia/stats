import fs from "fs"; // install type defination file `npm install @types/node`

const matches = fs
  .readFileSync("football.csv", { encoding: "utf8" })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

console.log(matches);
