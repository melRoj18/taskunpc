import { useTareas } from "../context/TareasContext";
import { Link } from "react-router-dom";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  const cardStyle = {
    border: "1px solid #ccc",
    margin: "10px",
    padding: "10px",
    borderRadius: "8px",
    opacity: completada ? 0.6 : 1,
    textDecoration: completada ? "line-through" : "none",
    backgroundColor: completada ? "#f0f0f0" : "white",
  };

  return (
    <div style={cardStyle}>
      <h3>{titulo}</h3>
      <p>
        <strong>Materia:</strong> {materia}
      </p>
      <p>
        <strong>Fecha:</strong> {fecha}
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            checked={completada}
            onChange={() => toggleTarea(id)}
          />
          {completada ? " Completada" : " Pendiente"}
        </label>
      </p>
      <Link to={`/tarea/${id}`}>Ver detalle</Link>
    </div>
  );
}

export default TareaCard;
