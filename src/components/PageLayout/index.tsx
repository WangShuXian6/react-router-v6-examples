import styles from "./index.module.css";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <>
      <main className={styles.main}>PageLayout</main>
      <Outlet />
    </>
  );
};

export default PageLayout;
