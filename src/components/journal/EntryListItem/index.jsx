import ListItem from "../../ui/ListItem";

function EntryListItem({ id, title, body }) {
  return <ListItem path={id} title={title} body={body} />;
}

export default EntryListItem;
