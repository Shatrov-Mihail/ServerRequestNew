import config from "../config.json";

const todoEndPoint = config.baseURL + "todos/";

export const todosAPI = {
  fetchAll: async () => {
    const response = await fetch(todoEndPoint);
    return await response.json();
  },
  create: async (title) => {
    const response = await fetch(todoEndPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ title }),
    });
    return await response.json();
  },
  update: async ({ id, title }) => {
    const response = await fetch(todoEndPoint + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ title }),
    });
    return await response.json();
  },
  remove: async (id) => {
    const response = await fetch(todoEndPoint + id, {
      method: "DELETE",
    });
    return await response.json();
  },
};
