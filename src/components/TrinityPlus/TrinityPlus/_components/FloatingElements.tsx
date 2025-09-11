const FloatingElements = () => {
  return (
    <div id="floating-elements">
      <div
        className="float"
        style={{ left: "10%", animationDuration: "10s", color: "#06b6d4" }}
      >
        🧬
      </div>
      <div
        className="float"
        style={{
          left: "30%",
          animationDuration: "12s",
          animationDelay: "2s",
          color: "#a855f7",
        }}
      >
        ⚡
      </div>
      <div
        className="float"
        style={{
          left: "50%",
          animationDuration: "15s",
          animationDelay: "4s",
          color: "#ec4899",
        }}
      >
        ✨
      </div>
      <div
        className="float"
        style={{
          left: "70%",
          animationDuration: "11s",
          animationDelay: "6s",
          color: "#10b981",
        }}
      >
        🧬
      </div>
      <div
        className="float"
        style={{
          left: "90%",
          animationDuration: "13s",
          animationDelay: "8s",
          color: "#fbbf24",
        }}
      >
        🚀
      </div>
    </div>
  );
};

export default FloatingElements;
