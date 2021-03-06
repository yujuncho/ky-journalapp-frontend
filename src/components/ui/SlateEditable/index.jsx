import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  Fragment
} from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import { renderElement, renderPlaceholder } from "./renderer";
import styles from "./index.module.css";

// TODO: Split functionality such that the SlateEditable either returns a title or body
function SlateEditable({ title, body, onBodyChange }) {
  const entryTitleEditor = useMemo(() => withReact(createEditor()), []);
  let [entryTitle, setEntryTitle] = useState([
    {
      type: "header",
      children: [{ text: title }]
    }
  ]);

  let titleChangeHandler = value => {
    setEntryTitle(value);
  };

  const [isBodyEmpty, setIsBodyEmpty] = useState(true);

  useEffect(() => {
    if (!onBodyChange) {
      return;
    }

    if (isBodyEmpty) {
      onBodyChange(true);
    } else {
      onBodyChange(false);
    }
  }, [isBodyEmpty, onBodyChange]);

  const entryBodyEditor = useMemo(() => withReact(createEditor()), []);
  const [entryBody, setEntryBody] = useState([
    {
      type: "paragraph",
      children: [{ text: body }]
    }
  ]);

  let bodyChangeHandler = value => {
    setEntryBody(() => {
      if (value[0].children[0].text.length === 0) {
        setIsBodyEmpty(true);
      } else {
        setIsBodyEmpty(false);
      }

      return value;
    });
  };

  useCallback(renderElement, []);
  useCallback(renderPlaceholder, []);

  return (
    <Fragment>
      <Slate
        editor={entryTitleEditor}
        value={entryTitle}
        onChange={titleChangeHandler}
      >
        <Editable
          className={styles.header}
          renderElement={renderElement}
          placeholder="Title"
          renderPlaceholder={renderPlaceholder}
        />
      </Slate>
      <Slate
        editor={entryBodyEditor}
        value={entryBody}
        onChange={bodyChangeHandler}
      >
        <Editable
          className={styles.body}
          renderElement={renderElement}
          placeholder="Type something"
          renderPlaceholder={renderPlaceholder}
        />
      </Slate>
    </Fragment>
  );
}

export default SlateEditable;
