"use strict";

import fs from "fs";

function PartOne(fileName) {
  // read file and split into lines
  const lines = fs.readFileSync(fileName, "utf8").trim().split("\r\n");

  // loop over lines and find the first and last number
  const values = lines.map((line) => {
    /* 
    NOTE
        We then want to find the first and last number in the line. We can do this by making use of Find() and FindLast().
        - find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        - findLast: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast
     */

    // we can use the isNan() function to check if a value is a number (but we want the inverse of this)
    // isNan: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));
    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));

    return Number(first + last);
  });

  // loop over values using reduce to add them together
  // reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return values.reduce((s, v) => s + v);
}

console.log(PartOne("./input.txt"));
