// src/App.jsx
import { useState } from "react";
import { tareasIniciales } from "./data/tarea";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [tareas] = useState(tareasIniciales);
  const pendingCount = tareas.filter((t) => !t.completada).length;

  return (
    <div>
      <Header pendingCount={pendingCount} />
      <ListaTareas />
    </div>
  );
}

export default App;
