import React from 'react'

const App = () => {
  return (
    <div>
      <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>DIYA</h1>
        <p style={styles.contact}>📧 diya94816@gmail.com</p>
        <p style={styles.contact}>📞 +123 456 7890</p>
      </div>
    </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    margin: "0",
    color: "#333",
  },
  contact: {
    margin: "10px 0",
    color: "#555",
  },
};


export default App
