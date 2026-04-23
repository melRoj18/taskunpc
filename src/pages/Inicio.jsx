import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import ListaTareas from "../components/ListaTareas";
import Header from "../components/Header";

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
    return true;
  });

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div>
      <Header pendientes={pendientes} />
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>
      <ListaTareas tareas={tareasFiltradas} />
    </div>
  );
}

export default Inicio;
