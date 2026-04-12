function Header({ pendingCount }) {
  return (
    <header className="app-header">
      <h1>TaskUPC — Mi Gestor Académico</h1>
      <p className="pending-badge">📋 Tareas pendientes: {pendingCount}</p>
    </header>
  );
}
export default Header; // ←
