const App = () => {
  const arr = [...Array(100).keys()].map((x) => x + 1).reverse(); // [1..100]
  const rows = [];

  // Split into chunks of 10
  for (let i = 0; i < arr.length; i += 10) {
    const row = arr.slice(i, i + 10);
    // Reverse every second row (i.e. 2nd, 4th, etc.)
    if ((i / 10) % 2 === 1) row.reverse();
    rows.push(row);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "auto auto auto auto auto auto auto auto auto auto",
        gap: "10px",
        gap: 0,
        padding: "50px",
      }}
    >
      {rows.flat().map((i) => (
        <p
          key={i}
          style={{
            background: i % 2 === 0 ? "yellow" : "pink",
            padding: "25px",
            textAlign: "center",
            margin: 0,
          }}
        >
          {i}
        </p>
      ))}
    </div>
  );
};

export default App;
