function Header({ pendientes }) {
  return (
    <header
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>📚 TaskUPC — Mi Gestor Académico</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </header>
  );
}
export default Header;
