import SlateEditable from "../../ui/SlateEditable";
import Container from "../../layout/Container";

function ContentPage(props) {
  return (
    <Container>
      <SlateEditable />
      {props.children}
    </Container>
  );
}

export default ContentPage;
