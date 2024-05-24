const add = require("../add");
const greet = require("../greet")
// test("the total of numbers 5 and 2", () => {
//   expect(add(5, 2)).toBe(7);
// });
// test("the total of numbers 3 and 2", () => {
//   expect(add(3, 2)).toBe(5);
// });
// test("the total of numbers 2000 and 200000", () => {
//   expect(add(2000, 200000)).toBe(220000);
// });
// console.log(greet("harsh"));
test('this is the testing of the stub', () => { 
    const stubLogger = { log: jest.fn() };
    const res = greet("harsh2", stubLogger);
    expect(res).toBe("hello harsh2");
    expect(stubLogger.log).toHaveBeenCalledWith("hello harsh2");
 })
