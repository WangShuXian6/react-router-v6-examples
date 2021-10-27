import { useLocation, useParams, useSearchParams } from "react-router-dom";
import styles from "./index.module.css";

const Team = () => {
  const location = useLocation();
  const urlParams = useParams();
  const [urlSearchParams] = useSearchParams();

  const { teamId } = urlParams;

  return (
    <>
      <main className={styles.main}>Team</main>
      <main className={styles.main}>teamId:{teamId}</main>
    </>
  );
};

export default Team;
