import { useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${VITE_API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, []);

  const addTask = async (newTask) => {
    const response = await fetch(`${VITE_API_URL}/tasks`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const { succes, message, task } = await response.json();
    if (!succes) throw new Error(message);

    setTasks((prev) => [...prev, task]);
  };

  const removeTask = async (taskId) => {
    const response = await fetch(`${VITE_API_URL}/tasks/${taskId}`, {
      method: `DELETE`,
    });
    const { succes, message } = await response.json();
    if (!succes) throw new Error(message);
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const updateTask = () => {};

  return { tasks, addTask, removeTask, updateTask };
}
