import { Link } from "react-router-dom";
import styles from './index.module.css'

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav className={styles.nav}>
        <Link to="/">home</Link>
        <Link to="/teams">teams index</Link>
        <Link to="/teams/666">teams 666</Link>
        <Link to="/teams/new">teams new</Link>
        <Link to="/privacy">privacy</Link>
        <Link to="/tos">tos</Link>
        <Link to="contact-us">contact-us</Link>
      </nav>
    </>
  );
};

export default Home;
