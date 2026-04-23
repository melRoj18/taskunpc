import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();
  const navigate = useNavigate();
  const tarea = tareas.find((t) => t.id === parseInt(id));

  if (!tarea) {
    return <h2>Tarea no encontrada</h2>;
  }

  const handleEliminar = () => {
    if (window.confirm("¿Eliminar esta tarea?")) {
      eliminarTarea(tarea.id);
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Detalle de la tarea</h2>
      <p>
        <strong>ID:</strong> {tarea.id}
      </p>
      <p>
        <strong>Título:</strong> {tarea.titulo}
      </p>
      <p>
        <strong>Materia:</strong> {tarea.materia}
      </p>
      <p>
        <strong>Fecha:</strong> {tarea.fecha}
      </p>
      <p>
        <strong>Estado:</strong>{" "}
        {tarea.completada ? "Completada ✅" : "Pendiente ⏳"}
      </p>
      <button
        onClick={handleEliminar}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Eliminar tarea
      </button>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}

export default DetalleTarea;
