import reactLogo from "../../assets/react.svg";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="navItem">Home</Link>
        <Link to="/constantine/speakers" className="navItem">Speakers</Link>
      </nav>
      <Outlet />
    </div>
  );
}
