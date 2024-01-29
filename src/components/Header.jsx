import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://contacts.google.com/"> Google Contact</a> | Google
        Contact
      </p>
    </div>
  );
}

export default Header;
