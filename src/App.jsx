import { useWork } from "./Controller/WorkController.jsx";
import WorkView from "./View/WorkView.jsx";

export default function App() {
  const { works, addWork, deleteWork, changeStatus } = useWork();
  return (
    <WorkView
      works={works}
      onAdd={addWork}
      onDelete={deleteWork}
      onStatusChange={changeStatus}
    />
  );
}
