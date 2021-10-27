import styles from "./index.module.css";
import { Outlet } from "react-router";

const Teams = () => {
  return (
    <>
      <main className={styles.main}>Teams</main>
      <Outlet />
    </>
  );
};

export default Teams;
