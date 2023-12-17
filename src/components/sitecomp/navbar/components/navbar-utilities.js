const DesktopPages = () => (
    <div className="desktop-pages">
      <p>Categories</p>
      <p>Products</p>
      <p>Outlet</p>
    </div>
  );


const MobileDropdown = () => {
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-grid">
        <a href="/home" className="nav-item">Home</a>
        <a href="/products" className="nav-item">Products</a>
        <a href="/company" className="nav-item">Company</a>
        <a href="/contact" className="nav-item">Contact Us</a>

        <a href="/categories" className="nav-item">Categories</a>
        <a href="/trees" className="nav-item sub-item">Trees</a>
        <a href="/costumes" className="nav-item sub-item">Costumes</a>
        <a href="/decor" className="nav-item sub-item">Decor</a>
      </div>
    </div>
  );
};

export { MobileDropdown, DesktopPages };