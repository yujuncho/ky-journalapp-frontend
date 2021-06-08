import Header from "./components/layout/Header";
import JournalEntry from "./components/journal/JournalEntry";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <JournalEntry />
    </div>
  );
}

export default App;
