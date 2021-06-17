import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/layout/Header";
import EntryList from "./pages/EntryList";
import DayList from "./pages/DayList";
import JournalEntry from "./pages/JournalEntry";
import TemplateEntry from "./pages/TemplateEntry";
import Main from "./components/layout/Main";

import styles from "./App.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/journal" />
          </Route>
          <Route path="/journal" exact>
            <DayList />
          </Route>
          <Route path="/journal/:date" exact>
            <EntryList />
          </Route>
          <Route path="/journal/:date/:journalId">
            <JournalEntry />
          </Route>
          <Route path="/template/:templateId">
            <TemplateEntry />
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
