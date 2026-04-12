// src/components/TareaCard.jsx
function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <div className="tarea-card">
      <h3>{titulo}</h3>
      <p>
        <strong>Materia:</strong> {materia}
      </p>
      <p>
        <strong>Fecha:</strong> {fecha}
      </p>
      <p>
        <strong>Estado:</strong>{" "}
        <span className={completada ? "completada" : "pendiente"}>
          {completada ? "✅ Completada" : "⏳ Pendiente"}
        </span>
      </p>
    </div>
  );
}

export default TareaCard;
