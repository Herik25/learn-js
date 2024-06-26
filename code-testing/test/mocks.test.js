const fetchTodos = require("../fetchTodos");

test("fetches todos and returns an array", async () => {
  const todos = await fetchTodos();

  expect(todos).toBeInstanceOf(Array);
});

test("fetches specific user todos", async () => {
  const userId = 1;

  const todos = await fetchTodos(userId);

  expect(todos.every((todo) => todo.userId === userId)).toBe(true);
});
