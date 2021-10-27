import styles from "./index.module.css";
import { Outlet } from "react-router";
import GlobalNav from "../GlobalNav";
import GlobalFooter from "../GlobalFooter";

const MainLayout = () => {
  return (
    <>
      <main className={styles.main}>MainLayout</main>
      <GlobalNav />
      <Outlet />
      <GlobalFooter />
    </>
  );
};

export default MainLayout;
