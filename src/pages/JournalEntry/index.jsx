import { useState } from "react";
import { useParams } from "react-router-dom";

import Entry from "../../components/journal/Entry";
import TemplateList from "../../components/journal/TemplateList";

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

function JournalEntry(props) {
  const [isBodyEmpty, setIsBodyEmpty] = useState(true);
  const params = useParams();

  let template;
  if (params.journalId && params.journalId !== "new") {
    template = MOCK_ENTRIES.find(item => item.id === params.journalId);
  } else {
    template = { title: "", body: "" };
  }

  return (
    <Entry
      title={template.title}
      body={template.body}
      onBodyChange={isEmpty => setIsBodyEmpty(isEmpty)}
    >
      {template.title.length === 0 && isBodyEmpty && <TemplateList />}
    </Entry>
  );
}

export default JournalEntry;
