import { Fragment } from "react";

import SlateEditable from "../../ui/SlateEditable";

function Entry(props) {
  return (
    <Fragment>
      <SlateEditable title={props.title} body={props.body} />
      {props.children}
    </Fragment>
  );
}

export default Entry;
