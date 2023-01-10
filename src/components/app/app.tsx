import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { APP_ROUTS } from "../../const";
import StoriesList from "../stories-list/stories-list";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={APP_ROUTS.Main}>
          <StoriesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
