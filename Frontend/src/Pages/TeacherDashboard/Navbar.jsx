const Navbar = () => {
  return (
    <div
      style={{
        height: "60px",
        background: "#007bff",
        borderRadius: "4px",
        boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
        zIndex: 1,
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "start",
          padding: "16px",
        }}
      >
        Teacher Dashboard
      </h2>
    </div>
  );
};

export default Navbar;
