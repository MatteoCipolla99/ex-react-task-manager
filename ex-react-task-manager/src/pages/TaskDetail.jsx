import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useContext(GlobalContext);

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <h2>Task non trovata</h2>;
  }

  const handleDelete = () => {
    console.log("Task eliminata", task.id);
  };

  return (
    <div>
      <h1>Dettaglio del task</h1>
      <p>
        <strong>Nome:</strong>
        {task.title}
      </p>
      <p>
        <strong>Descrizione:</strong>
        {task.description}
      </p>
      <p>
        <strong>Stato:</strong>
        {task.status}
      </p>
      <p>
        <strong>Data di creazione</strong>
        {new Date(task.createAt).toLocaleDateString()}
      </p>
      <button onClick={handleDelete}>Elimina Task</button>
    </div>
  );
}
