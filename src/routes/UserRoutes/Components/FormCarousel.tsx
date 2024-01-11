import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./FormCarousel.module.scss";
// icons
import { FaUserPlus } from "react-icons/fa";
// components
import { GoBackButton } from "../../../components/index";

interface IFormCarousel {
  children: React.ReactNode;
  page: number;
}

const FormCarousel = ({ children, page }: IFormCarousel) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navButtons}>
        {page < 2 ? (
          <Link to="/user/create-account">
            <button aria-label="create-account">
              <FaUserPlus color="rgb(75, 75, 75)" size={20} />
            </button>
          </Link>
        ) : (
          <GoBackButton />
        )}
      </div>
      {children}
    </div>
  );
};

export default FormCarousel;
