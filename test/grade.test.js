const test = require("node:test");
const assert = require("node:assert");

const { getGrade } = require("../script");

//Test Cases for Grade A
test("Grade A", () => {
    assert.strictEqual(getGrade(95), "A");
    assert.strictEqual(getGrade(90), "A");
})

//Test Cases for Grade B
test("Grade B", () => {
    assert.strictEqual(getGrade(89), "B");
    assert.strictEqual(getGrade(80), "B");

})

//Test Cases for Grade C
test("Grade C", () => {
    assert.strictEqual(getGrade(79), "C");
    assert.strictEqual(getGrade(70), "C");
})

//Test Cases for Grade D
test("Grade D", () => {
    assert.strictEqual(getGrade(69), "D");
    assert.strictEqual(getGrade(60), "D");
})

//Test Cases for Grade F
test("Grade F", () => {
    assert.strictEqual(getGrade(59), "F");
    assert.strictEqual(getGrade(0), "F");
})

//Test Cases for Invalid Marks
test("Invalid Marks", () => {
    assert.strictEqual(getGrade(-1), "Invalid marks");
    assert.strictEqual(getGrade(101), "Invalid marks");

})
console.log("All tests passed!");
