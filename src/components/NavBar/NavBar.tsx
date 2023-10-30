import { NavLink } from "react-router-dom";
// styling
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="bg-color-1" role="navigation" aria-label="Main Navigation">
      <div className="nav-center">
        <ul className="nav-links">
          <NavLink
            to={"/"}
            id="index-link"
            className={"nav-link-a"}
            aria-label="Home"
          >
            <li className="nav-title">Citybikes</li>
          </NavLink>
          <NavLink
            to="stations"
            id="stations-link"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link-a" : isActive ? "nav-link-active" : ""
            }
            aria-label="Stations"
          >
            <li className={"nav-link"}>Stations</li>
          </NavLink>
          <NavLink
            to="journeys/1"
            id="journeys-link"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link-a" : isActive ? "nav-link-active" : ""
            }
            aria-label="Journeys"
          >
            <li className={"nav-link "}>Journeys</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
