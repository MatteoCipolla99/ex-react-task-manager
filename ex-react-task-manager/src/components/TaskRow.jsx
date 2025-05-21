import { memo } from "react";

const TaskRow = memo(({ task }) => {
  const getStatusStyle = task.status.replace(" ", "").toLowerCase();

  return (
    <tr>
      <td>{task.title}</td>
      <td className={getStatusStyle}>{task.status}</td>
      <td>{new Date(task.createAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
