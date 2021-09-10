import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen.js"
import HabitsScreen from "./pages/HabitsScreen/HabitsScreen.js";
import TopBar from "./pages/TopBar/TopBar";
import BottomBar from "./pages/BottomBar/BottomBar";
import TodaysHabitsScreen from "./pages/TodaysHabitsScreen/TodaysHabitsScreen";
import { useState } from "react";
import UserProfileDataContext from "./contexts/UserProfileDataContext";
import UserHabitsDataContext from "./contexts/UserHabitsDataContext";


export default function App() {
  const [userProfileData, setUserProfileData] = useState("")
  const [userHabitsData, setUserHabitsData] = useState("")
  const [areFixedBarsHidden, setAreFixedBarsHidden] = useState(true)
  return (
    <UserProfileDataContext.Provider value = {{ userProfileData, setUserProfileData }}>
      <UserHabitsDataContext.Provider value = {{ userHabitsData, setUserHabitsData }}>
        <Router>
          <TopBar isHidden = {areFixedBarsHidden} />
          <BottomBar isHidden = {areFixedBarsHidden} />
          <Switch>
            <Route path = "/" exact>
              <LoginScreen setAreFixedBarsHidden = { setAreFixedBarsHidden } />
            </Route>
            <Route path = "/cadastro" exact>
              <RegistrationScreen setAreFixedBarsHidden = { setAreFixedBarsHidden } />
            </Route>
            <Route path = "/habitos" exact>
              <HabitsScreen setAreFixedBarsHidden = { setAreFixedBarsHidden } />
            </Route>
            <Route path = "/hoje" exact>
              <TodaysHabitsScreen setAreFixedBarsHidden = { setAreFixedBarsHidden } />
            </Route>
          </Switch>
        </Router>
      </UserHabitsDataContext.Provider>
    </UserProfileDataContext.Provider>
  );
}