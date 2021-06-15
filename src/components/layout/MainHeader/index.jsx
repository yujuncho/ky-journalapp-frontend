import styles from "./index.module.css";

function MainHeader(props) {
  return (
    <div className={styles["main-header"]}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default MainHeader;
