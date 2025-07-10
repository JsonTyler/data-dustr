export default function Custom404() {
  return (
    <main style={{ backgroundColor: "#000", color: "#fff", textAlign: "center", padding: "4rem", minHeight: "100vh" }}>
      <img src="/apple-touch-icon.png" alt="DataDustr icon" style={{ width: "64px", marginBottom: "1rem" }} />
      <h1 style={{ fontSize: "2.5rem" }}>This part of the archive is missing.</h1>
      <p style={{ margin: "1rem 0", maxWidth: "500px", marginInline: "auto" }}>
        Either the page doesn’t exist, or the trail’s gone cold. Let’s head back to the{" "}
        <a href="/" style={{ color: "#BE261C" }}>homepage</a> and start from what we know.
      </p>
    </main>
  );
}