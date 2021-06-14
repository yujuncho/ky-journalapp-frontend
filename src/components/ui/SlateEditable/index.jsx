import React, { useMemo, useState, useCallback, Fragment } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import { renderElement, renderPlaceholder } from "./renderer";

// TODO: Split functionality such that the SlateEditable either returns a title or body
function SlateEditable(props) {
  const entryTitleEditor = useMemo(() => withReact(createEditor()), []);
  let [entryTitle, setEntryTitle] = useState([
    {
      type: "header",
      children: [{ text: props.title }]
    }
  ]);

  let titleChangeHandler = value => {
    setEntryTitle(value);
  };

  const entryBodyEditor = useMemo(() => withReact(createEditor()), []);
  const [entryBody, setEntryBody] = useState([
    {
      type: "paragraph",
      children: [{ text: props.body }]
    }
  ]);

  let bodyChangeHandler = value => {
    setEntryBody(value);
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
          renderElement={renderElement}
          placeholder="Type something"
          renderPlaceholder={renderPlaceholder}
        />
      </Slate>
    </Fragment>
  );
}

export default SlateEditable;
