import { Fragment } from "react";

import SlateEditable from "../../ui/SlateEditable";

function Entry({ title, body, onBodyChange, children }) {
  return (
    <Fragment>
      <SlateEditable title={title} body={body} onBodyChange={onBodyChange} />
      {children}
    </Fragment>
  );
}

export default Entry;
