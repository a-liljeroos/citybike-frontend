import React from "react";
import { useAuthContext } from "../../../../AuthContext";
// styles
import styles from "./UserPage.module.scss";
// componentse
import Page from "../../../Page/Page";

const UserPage = () => {
  const { user, logout } = useAuthContext();
  return (
    <Page>
      <p className={styles.text}>Logged in as {user?.username}</p>
      <button className={styles.button} onClick={logout}>
        Logout
      </button>
    </Page>
  );
};

export default UserPage;
