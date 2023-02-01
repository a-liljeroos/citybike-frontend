import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const handleClassNameChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const journeyLink = document.querySelector("#journeys-link");
    const stationLink = document.querySelector("#stations-link");
    journeyLink?.classList.remove("nav-link-active");
    stationLink?.classList.remove("nav-link-active");
    if (/Stations/.test(e.currentTarget.innerText)) {
      stationLink?.classList.add("nav-link-active");
    }
    if (/Journeys/.test(e.currentTarget.innerText)) {
      journeyLink?.classList.add("nav-link-active");
    }
  };

  return (
    <nav className="bg-color-1">
      <div className="nav-center">
        <ul className="nav-links">
          <Link
            onClick={(e) => {
              handleClassNameChange(e);
            }}
            to={"/"}
            id="index-link"
            className="nav-link-a"
          >
            <li className="nav-title">Citybikes</li>
          </Link>
          <Link
            to="stations"
            id="stations-link"
            className="nav-link-a
            "
            onClick={(e) => {
              handleClassNameChange(e);
            }}
          >
            <li className={"nav-link"}>Stations</li>
          </Link>
          <Link
            to="journeys/1"
            id="journeys-link"
            className="nav-link-a"
            onClick={(e) => {
              handleClassNameChange(e);
            }}
          >
            <li className={"nav-link "}>Journeys</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
