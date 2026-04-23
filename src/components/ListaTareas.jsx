import TareaCard from "./TareaCard";

function ListaTareas({ tareas }) {
  return (
    <div>
      {tareas.length === 0 ? (
        <p>No hay tareas para mostrar.</p>
      ) : (
        tareas.map((tarea) => <TareaCard key={tarea.id} {...tarea} />)
      )}
    </div>
  );
}

export default ListaTareas;
