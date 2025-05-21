import { useState, useRef, useMemo } from "react";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const taskTitleError = useMemo(() => {
    if (!taskTitle.trim()) return "Il nome della task è obbligatorio.";
    if ([...taskTitle].some((char) => symbols.includes(char)))
      return "Il nome della task non può contenere simboli.";
    return "";
  }, [taskTitle]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitleError) return;

    const newTask = {
      title: taskTitle.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    };

    console.log("Task da aggiungere", newTask);
  };

  return (
    <div>
      <h1>Aggiungi una nuova Task</h1>
      <form onSubmit={handleSubmit}>
        {/* Nome task */}
        <label>
          Nome Task:
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </label>
        {taskTitleError && <p style={{ color: "red" }}>{taskTitleError}</p>}
        {/* Descrizione task */}
        <label>
          Descrizione:
          <textarea ref={descriptionRef} />
        </label>
        {/* Stato task */}
        <label>
          Stato:
          <select ref={statusRef} defaultValue="To do">
            {["To Do", "Doing", "Done"].map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" disabled={!!taskTitleError}>
          Aggiungi Task
        </button>
      </form>
    </div>
  );
}
