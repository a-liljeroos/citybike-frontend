import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
// styling
import "./NavBar.scss";
// icons
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user } = useAuthContext();
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
          {user ? (
            <>
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
                to="journeys"
                id="journeys-link"
                className={({ isActive, isPending }) =>
                  isPending ? "nav-link-a" : isActive ? "nav-link-active" : ""
                }
                aria-label="Journeys"
              >
                <li className={"nav-link "}>Journeys</li>
              </NavLink>{" "}
            </>
          ) : null}

          <NavLink
            to="user"
            id="user-link"
            className={({ isActive, isPending }) =>
              isPending ? "nav-link-a" : isActive ? "nav-link-active" : ""
            }
            aria-label="Login"
          >
            <li className={"nav-link"}>
              <FaUserCircle size={28} color="rgb(250, 250, 250)" />
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
