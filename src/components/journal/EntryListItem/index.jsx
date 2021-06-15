import { useRouteMatch, Link } from "react-router-dom";

import styles from "./index.module.css";

function EntryListItem(props) {
  const routeMatch = useRouteMatch();

  return (
    <li className={styles.entryListItem}>
      <Link to={`${routeMatch.url}/${props.id}`}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </Link>
    </li>
  );
}

export default EntryListItem;
