import styles from "./index.module.css";

function Main(props) {
  return <main className={styles.main}>{props.children}</main>;
}

export default Main;
