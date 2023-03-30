import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav>
        <div className="link-container">
            <p id="nav-title">Travelpedia</p>
            <p><Link to="/" id="linkTo">Home</Link></p>
            <p><Link to="/locations" id="linkTo">Locations</Link></p>
            <p><Link to="/travel-recs" id="linkTo">Where to?</Link></p>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;