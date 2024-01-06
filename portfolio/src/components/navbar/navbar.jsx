import "./navbar.css"
export default function Navbar() {
    return (
        <div className="navbar">
        <div className="dory">
          <a href="#homepage">D<span className="span">K</span></a>
        </div>
        <div className="right">
          <a href="#aboutme">O mně</a>
          <a href="#codelam">Co dělám</a>
          <a href="#reference">Reference</a>
          <a href="#form">Kontaktovat</a>
        </div>
      </div>
    );
}