import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function TemplateList(props) {
  return (
    <Fragment>
      <ul className={styles.templateList}>
        <li>
          <Link to="/template/t1">Gratitudes</Link>
        </li>
        <li>
          <Link to="/template/t2">Challenging Moments</Link>
        </li>
        <li>
          <Link to="/template/t3">Processing Emotions</Link>
        </li>
        <li>
          <Link to="/template/t4">Retrospective</Link>
        </li>
        <li>
          <Link to="/template/new">+ New Template</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default TemplateList;
