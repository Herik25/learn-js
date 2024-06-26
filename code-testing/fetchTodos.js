const axios = require('axios')

async function fetchTodos(userId = null) {
  const url = userId
    ? `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    : "https://jsonplaceholder.typicode.com/todos";
  const response = await axios.get(url);
  return response.data;
}

module.exports = fetchTodos;
