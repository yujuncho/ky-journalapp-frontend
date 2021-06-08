import React, { useMemo, useState, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import Container from "../../layout/Container";
import Button from "../../ui/Button";

import styles from "./index.module.css";

function JournalEntry(props) {
  const entryTitleEditor = useMemo(() => withReact(createEditor()), []);
  let [entryTitle, setEntryTitle] = useState([
    {
      type: "header",
      children: [{ text: "Header" }]
    }
  ]);

  let titleChangeHandler = value => {
    setEntryTitle(value);
  };

  const entryBodyEditor = useMemo(() => withReact(createEditor()), []);
  const [entryBody, setEntryBody] = useState([
    {
      type: "paragraph",
      children: [{ text: "Body" }]
    }
  ]);

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case "header":
        return <H1Element {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  let bodyChangeHandler = value => {
    setEntryBody(value);
  };

  let createTemplateHandler = event => {
    event.preventDefault();
    alert("Create Template!");
  };

  return (
    <Container>
      <Slate
        editor={entryTitleEditor}
        value={entryTitle}
        onChange={titleChangeHandler}
      >
        <Editable renderElement={renderElement} />
      </Slate>
      <Slate
        editor={entryBodyEditor}
        value={entryBody}
        onChange={bodyChangeHandler}
      >
        <Editable renderElement={renderElement} />
      </Slate>
      <ul className={styles.templateList}>
        <li>Gratitudes</li>
        <li>Challenging Moments</li>
        <li>Processing Emotions</li>
        <li>Retrospection</li>
      </ul>
      <Button onClick={createTemplateHandler}>+ Create New Template</Button>
    </Container>
  );
}

const H1Element = props => {
  return <h1 {...props.attributes}>{props.children}</h1>;
};

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default JournalEntry;
