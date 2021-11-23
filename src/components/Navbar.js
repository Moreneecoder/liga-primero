import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top main-bg-color text-white">
    <div className="container-fluid">
      <Link className="navbar-brand text-white fw-bolder" to="/">LigaPrimero</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="Navbar collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/">Standings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/fixtures">Fixtures</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/goalchart">Goal Chart</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
