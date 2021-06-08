import styles from "./index.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>Navigation</nav>
      <span>Profile</span>
    </header>
  );
}

export default Header;
