import SlateEditable from "../../ui/SlateEditable";
import Container from "../Container";

function Entry(props) {
  return (
    <Container>
      <SlateEditable title={props.title} body={props.body} />
      {props.children}
    </Container>
  );
}

export default Entry;
