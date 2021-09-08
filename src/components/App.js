import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InitialScreen from "./InitialScreen/InitialScreen";
import HabitsScreen from "./HabitsScreen/HabitsScreen.js";
import TopBar from "./Top and Bottom Bars/TopBar";
import BottomBar from "./Top and Bottom Bars/BottomBar";
import TodaysHabitsScreen from "./TodaysHabitsScreen/TodaysHabitsScreen";
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