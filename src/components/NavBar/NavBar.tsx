import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const handleClassNameChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const journeyLink = document.querySelector("#journeys-link");
    const stationLink = document.querySelector("#stations-link");
    const indexLink = document.querySelector("#index-link");
    journeyLink?.classList.remove("nav-link-active");
    journeyLink?.removeAttribute("aria-current");
    stationLink?.classList.remove("nav-link-active");
    stationLink?.removeAttribute("aria-current");
    indexLink?.removeAttribute("aria-current");
    if (/Stations/.test(e.currentTarget.innerText)) {
      stationLink?.classList.add("nav-link-active");
      stationLink?.setAttribute("aria-current", "page");
    }
    if (/Journeys/.test(e.currentTarget.innerText)) {
      journeyLink?.classList.add("nav-link-active");
      journeyLink?.setAttribute("aria-current", "page");
    }
    if (/Citybikes/.test(e.currentTarget.innerText)) {
      indexLink?.setAttribute("aria-current", "page");
    }
  };

  return (
    <nav className="bg-color-1" role="navigation" aria-label="Main Navigation">
      <div className="nav-center">
        <ul className="nav-links">
          <Link
            onClick={(e) => {
              handleClassNameChange(e);
            }}
            to={"/"}
            id="index-link"
            className="nav-link-a"
            aria-label="Home"
          >
            <li className="nav-title" role="link">
              Citybikes
            </li>
          </Link>
          <Link
            onClick={(e) => {
              handleClassNameChange(e);
            }}
            to="stations"
            id="stations-link"
            className="nav-link-a
            "
            aria-label="Stations"
          >
            <li className={"nav-link"} role="link">
              Stations
            </li>
          </Link>
          <Link
            onClick={(e) => {
              handleClassNameChange(e);
            }}
            to="journeys/1"
            id="journeys-link"
            className="nav-link-a"
            aria-label="Journeys"
          >
            <li className={"nav-link "} role="link">
              Journeys
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
