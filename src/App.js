import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InitialScreen from "./pages/InitialScreen/InitialScreen";
import HabitsScreen from "./pages/HabitsScreen/HabitsScreen.js";
import TopBar from "./pages/TopBar/TopBar";
import BottomBar from "./pages/BottomBar/BottomBar";
import TodaysHabitsScreen from "./pages/TodaysHabitsScreen/TodaysHabitsScreen";
import { useState } from "react";


export default function App() {
  const [areFixedBarsHidden, setAreFixedBarsHidden] = useState(false)
  return (
    <Router>
      <TopBar isHidden = {areFixedBarsHidden} />
      <BottomBar isHidden = {areFixedBarsHidden} />
      <Switch>
        <Route path = "/" exact>
          <InitialScreen isUserRegistered = {true}/>
        </Route>
        <Route path = "/cadastro" exact>
          <InitialScreen isUserRegistered = {false}/>
        </Route>
        <Route path = "/habitos" exact>
          <HabitsScreen />
        </Route>
        <Route path = "/hoje" exact>
          <TodaysHabitsScreen />
        </Route>
      </Switch>
    </Router>
  );
}