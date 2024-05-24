// const greet = require('../add');

// test('stub test of greet function', () => {
//     const stubLogger = { log: jest.fn() };
//     const res = greet("harsh", stubLogger);
//     expect(res).toBe("hello harsh");
//     expect(stubLogger.log).toHaveBeenCalledWith("hello harsh");
//  })

const getUser = require("../add");

// test("fetches user data from the database", async () => {
//   const mockDatabase = {
//     query: jest.fn().mockResolvedValue([{ id: 1, name: "Alice" }]),
//   };

//   const result = await getUser(mockDatabase);

// //   expect(mockDatabase.query).toHaveBeenCalled();
//   expect(result).toEqual([{ id: 1, name: "Alice" }]);
// });


test('fetch user data from the database', async () => { 
    const mockDatabase = {
        query: jest.fn().mockResolvedValue([{ id: 1, name: "Alice" }])
    }

    const result = await getUser(mockDatabase);

    expect(mockDatabase.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "Alice" }]);
 })