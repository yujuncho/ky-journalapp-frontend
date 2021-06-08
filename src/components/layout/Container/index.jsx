import styles from "./index.module.css";

function Container(props) {
  return <main className={styles.container}>{props.children}</main>;
}

export default Container;
