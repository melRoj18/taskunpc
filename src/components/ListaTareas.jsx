import { tareasIniciales } from "../data/tarea";
import TareaCard from "./TareaCard";

function ListaTareas() {
  return (
    <div className="lista-tareas">
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;
