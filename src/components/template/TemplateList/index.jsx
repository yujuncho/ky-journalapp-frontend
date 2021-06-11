import { Fragment } from "react";

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
        <li>Gratitudes</li>
        <li>Challenging Moments</li>
        <li>Processing Emotions</li>
        <li>Retrospection</li>
      </ul>
      <Button onClick={createTemplateHandler}>+ Create New Template</Button>
    </Fragment>
  );
}

export default TemplateList;
