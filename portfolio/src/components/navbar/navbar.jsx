import "./navbar.css"
export default function Navbar() {
    return (
        <div className="navbar">
        <div className="dory">
          <a href="#">D<span className="span">K</span></a>
        </div>
        <div className="right">
          <a href="#">O mně</a>
          <a href="#">Co dělám</a>
          <a href="#">Kontaktovat</a>
        </div>
      </div>
    );
}