import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  return (
    <div>
      <nav
        style={{
          background: "#282c34",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>
          Inicio
        </Link>
        <Link to="/nueva" style={{ color: "white", margin: "0 10px" }}>
          ➕ Nueva tarea
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </div>
  );
}

export default App;
