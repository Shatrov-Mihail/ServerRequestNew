import config from "../config.json";

const todoEndPoint = config.baseURL + "todos/";

export const todosAPI = {
  fetchAll: async () => {
    const response = await fetch(todoEndPoint);
    return await response.json();
  },
  fetchOne: async (id) => {
    const response = await fetch(todoEndPoint + id);
    return await response.json();
  },
  create: async (todo) => {
    const response = await fetch(todoEndPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    return await response.json();
  },
  update: async (id, updatedTodo) => {
    const response = await fetch(todoEndPoint + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo),
    });
    return await response.json();
  },
  remove: async (id) => {
    await fetch(todoEndPoint + id, { method: "DELETE" });
  },
};
