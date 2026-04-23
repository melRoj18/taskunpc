/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { tareasIniciales } from "../data/tareas";

const TareasContext = createContext();

export function TareasProvider({ children }) {
  // Cargar desde localStorage o usar tareasIniciales
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    if (guardadas) {
      return JSON.parse(guardadas);
    } else {
      // Si es primera vez, guardamos las tareas iniciales en localStorage
      localStorage.setItem("tareas", JSON.stringify(tareasIniciales));
      return tareasIniciales;
    }
  });

  // Guardar en localStorage cada vez que cambien las tareas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // ... resto del código igual (agregarTarea, toggleTarea, eliminarTarea)
  const agregarTarea = (nuevaTarea) => {
    const tareaConId = {
      id: Date.now(),
      titulo: nuevaTarea.titulo,
      materia: nuevaTarea.materia,
      fecha: nuevaTarea.fecha,
      completada: false,
    };
    setTareas([...tareas, tareaConId]);
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <TareasContext.Provider
      value={{ tareas, agregarTarea, toggleTarea, eliminarTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}
