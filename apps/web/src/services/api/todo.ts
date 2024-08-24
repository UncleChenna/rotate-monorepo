import axios from "axios";

export const getTodos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await axios.get(url);

  return res.data.slice(0, 10); // Return only the first 10 todos
};