import { Fragment } from "react";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";

import EntryListItem from "../../components/journal/EntryListItem";
import MainHeader from "../../components/layout/MainHeader";

const MOCK_ENTRIES = [
  {
    id: "e1",
    title: "Gratitudes",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque culpa ex dolores possimus! Animi ab impedit nemo quisquam error?"
  },
  {
    id: "e2",
    title: "Challenging Moments",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque culpa ex dolores possimus! Animi ab impedit nemo quisquam error?"
  },
  {
    id: "e3",
    title: "Processing Emotions",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque culpa ex dolores possimus! Animi ab impedit nemo quisquam error?"
  },
  {
    id: "e4",
    title: "Retrospective",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque culpa ex dolores possimus! Animi ab impedit nemo quisquam error?"
  }
];

function EntryList() {
  const routeMatch = useRouteMatch();
  const history = useHistory();
  const { date } = useParams();

  const formattedDate = new Date(
    date.substring(0, 4),
    date.substring(4, 6),
    date.substring(6)
  ).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric"
  });

  const newEntryHandler = event => {
    event.preventDefault();
    history.push(`${routeMatch.url}/new`);
  };

  const entryItemsList = MOCK_ENTRIES.map(entry => {
    return (
      <EntryListItem
        key={entry.id}
        id={entry.id}
        title={entry.title}
        body={entry.body}
      />
    );
  });

  return (
    <Fragment>
      <MainHeader title={formattedDate}>
        <button type="button" onClick={newEntryHandler}>
          + New
        </button>
      </MainHeader>
      <ul>{entryItemsList}</ul>
    </Fragment>
  );
}

export default EntryList;
