import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, removeTask, updateTask } = useContext(GlobalContext);

  const task = tasks.find((task) => task.id === parseInt(id));

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  if (!task) {
    return <h2>Task non trovata</h2>;
  }

  const handleDelete = async () => {
    try {
      await removeTask(task.id);
      alert("Task eliminato con successo");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask(updatedTask);
      setShowEditModal(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
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
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <button onClick={() => setShowDeleteModal(true)}>Elimina Task</button>
      <button onClick={() => setShowEditModal(true)}>Modifica Task</button>

      <Modal
        title="Conferma Eliminazione"
        content={<p>Confermi di eliminare la task</p>}
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        confirmText="Elimina"
      />

      <EditTaskModal
        task={task}
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleUpdate}
      />
    </div>
  );
}
