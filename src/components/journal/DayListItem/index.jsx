import ListItem from "../../ui/ListItem";

export default function DayListItem({ id, date, entryOverview, entryCount }) {
  return (
    <ListItem
      path={id}
      title={date.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        year: "numeric",
        day: "numeric"
      })}
      body={entryOverview}
      info={entryCount}
    />
  );
}
