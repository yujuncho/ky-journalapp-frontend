import { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";

import styles from "./index.module.css";

function TemplateList(props) {
  let createTemplateHandler = event => {
    event.preventDefault();
    alert("Create Template!");
  };

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
      </ul>
      <Button onClick={createTemplateHandler}>+ Create New Template</Button>
    </Fragment>
  );
}

export default TemplateList;
