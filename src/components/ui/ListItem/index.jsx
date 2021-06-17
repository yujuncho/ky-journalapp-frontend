import { Link, useRouteMatch } from "react-router-dom";

import styles from "./index.module.css";

export default function ListItem({ path, title, body, info }) {
  const routeMatch = useRouteMatch();

  return (
    <li className={styles["list-item"]}>
      <Link to={`${routeMatch.url}/${path}`}>
        <div className={styles["list-item__header"]}>
          <h2>{title}</h2>
          <span>{info || ""}</span>
        </div>
        <p>{body}</p>
      </Link>
    </li>
  );
}
