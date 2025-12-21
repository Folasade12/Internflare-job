import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">InternflareJobs</div>
      <ul className="navbar__links">
        <li>Home</li>
        <li>How it Works</li>
        <li>Employers</li>
        <li>Verification</li>
      </ul>
      <div className="buttons">
        <button className="signin">Sign In</button>
        <button className="navbar__cta">Contact Us</button>
      </div>
    </nav>
  );
};
export default Navbar;