import { useWork } from "./Controller/useWork";
import WorkView from "./View/WorkView";

export default function App() {
  const { works, addWork, deleteWork } = useWork();
  return <WorkView works={works} onAdd={addWork} onDelete={deleteWork} />;
}
