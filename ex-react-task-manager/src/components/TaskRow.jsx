import React from "react";

const TaskRow = React.memo(({ task }) => {
  const { title, status, createAd } = task;

  const getStatusStyle = () => {
    switch (status) {
      case "To do":
        return { backgroundColor: "red" };
      case "Doing":
        return { backgroundColor: "yellow" };
      case "Done":
        return { backgroundColor: "green" };
      default:
        return {};
    }
  };
  return (
    <tr>
      <td>{title}</td>
      <td style={getStatusStyle()}>{status}</td>
      <td>{new Date(createAd).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
