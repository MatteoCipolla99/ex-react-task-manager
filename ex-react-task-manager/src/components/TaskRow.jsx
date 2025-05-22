import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {
  const getStatusStyle = task.status.replace(" ", "").toLowerCase();

  return (
    <tr>
      <td>
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </td>
      <td>{task.title}</td>
      <td className={getStatusStyle}>{task.status}</td>
      <td>{new Date(task.createAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
