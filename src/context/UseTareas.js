import { useContext } from "react";
import { TareasContext } from "./TareasContext";

export function useTareas() {
  const context = useContext(TareasContext);

  if (!context) {
    throw new Error("useTareas debe usarse dentro de un TareasProvider");
  }

  return context;
}
