import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/layout/Header";
import JournalEntry from "./pages/JournalEntry";
import TemplateEntry from "./pages/TemplateEntry";

import styles from "./App.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/journal" />
        </Route>
        <Route path="/journal">
          <JournalEntry />
        </Route>
        <Route path="/template/:templateId">
          <TemplateEntry />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
