import { Fragment } from "react";

import DayListItem from "../../components/journal/DayListItem";
import MainHeader from "../../components/layout/MainHeader";

const today = new Date();
const TODAY_FORMATTED = `${today.getFullYear()}${today.getMonth() < 9 && 0}${
  today.getMonth() + 1
}${today.getDate()}`;

const DAY_ENTRIES = [
  {
    id: TODAY_FORMATTED,
    date: today,
    entryOverview:
      "Gratitudes, Challenging Moments, Processing Emotions, Retrospection",
    entryCount: "4 entries"
  }
];

function DayList() {
  const dayItemsList = DAY_ENTRIES.map(day => {
    return (
      <DayListItem
        key={day.id}
        id={day.id}
        date={day.date}
        entryOverview={day.entryOverview}
        entryCount={day.entryCount}
      />
    );
  });

  return (
    <Fragment>
      <MainHeader title="Journal" />
      <ul>{dayItemsList}</ul>
    </Fragment>
  );
}

export default DayList;
