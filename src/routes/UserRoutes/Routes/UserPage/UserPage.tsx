import React from "react";
import { useAuthContext } from "../../../../AuthContext";
// styles
import styles from "./UserPage.module.scss";
// componentse
import { Page } from "../../../../components/index";
import { useLogout } from "../Login/useLogout";

const UserPage = () => {
  const { user, token } = useAuthContext();
  const logout = useLogout();
  return (
    <Page>
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>{user?.username}</h3>
        {user?.id && <p className={styles.text}>User id: {user?.id}</p>}
        {user?.email && <p className={styles.text}>Email: {user?.email}</p>}
      </div>
      <button
        className={styles.logoutButton}
        onClick={() => {
          logout({ user, token });
        }}
      >
        Log Out
      </button>
    </Page>
  );
};

export default UserPage;
