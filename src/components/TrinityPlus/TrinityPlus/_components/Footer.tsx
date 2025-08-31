const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-foreground mb-4">nt0htng ness</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A philosophy of intentional simplicity, where every element serves a purpose 
              and beauty emerges from restraint.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Principles
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Practice
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 nt0htng ness. Embracing the essential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;