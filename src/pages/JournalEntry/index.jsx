import Entry from "../../components/layout/Entry";
import TemplateList from "../../components/journal/TemplateList";

// import styles from "./index.module.css";

function JournalEntry(props) {
  return (
    <Entry title="" body="">
      <TemplateList />
    </Entry>
  );
}

export default JournalEntry;
