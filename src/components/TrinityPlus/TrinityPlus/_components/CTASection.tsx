const SystemsSection = () => {

  const goToTrinityCore = () => {
    alert(
      "Trinity Core Systems:\n• Expense Manager\n• MCD System\n• RCD System\n\n[Would redirect to Trinity Core page]"
    );
  };

  return (
    <section className="section section-alt" id="systems">
      <div className="container">

        {/* Trinity Core Link */}
        <div className="trinity-core-banner">
          <h3 style={{ marginBottom: "1rem" }}>Looking for Core Systems?</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Trinity Core includes Expense Manager, MCD, and RCD systems.
            <br />
            Start with the essentials and upgrade to Plus anytime.
          </p>
          <a href="#" className="btn btn-primary" onClick={goToTrinityCore}>
            Explore Trinity Core Systems →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
