import {  Link } from "react-router-dom";
import styles from './index.module.css'

const About = () => {
  return (
    <>
      <main className={styles.main}>
        <h2 >Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default About;
