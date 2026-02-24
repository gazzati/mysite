export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000", color: "#8892b0", fontFamily: "sans-serif", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", margin: 0 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#ccd6f6", fontSize: "48px" }}>404</h1>
          <p>Page not found</p>
          <a href="/" style={{ color: "rgb(255, 111, 0)" }}>Go home</a>
        </div>
      </body>
    </html>
  )
}
