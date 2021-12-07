import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar--container">
      <img className="navbar--logo" src={logo} alt="" />
      <h1 className="navbar--title">my travel journal.</h1>
    </nav>
  );
}

export default Navbar;
