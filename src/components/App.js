import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InitialScreen from "./InitialScreen/InitialScreen";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact>
          <InitialScreen isUserRegistered = {true}/>
        </Route>
        <Route path = "/cadastro" exact>
          <InitialScreen isUserRegistered = {false}/>
        </Route>
      </Switch>
    </Router>
  );
}