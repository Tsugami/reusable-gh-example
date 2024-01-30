"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
test("Sum two numbers", () => {
    expect((0, sum_1.sum)(1, 2)).toBe(3);
});
