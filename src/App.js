import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import RegistrationScreen from './pages/RegistrationScreen/RegistrationScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen.js';
import HabitsScreen from './pages/HabitsScreen/HabitsScreen.js';
import RecordedDataScreen from './pages/UserHabitsHistoryScreen/UserHabitsHistoryScreen.js';
import TopBar from './pages/TopBar/TopBar';
import BottomBar from './pages/BottomBar/BottomBar';
import TodaysHabitsScreen from './pages/TodaysHabitsScreen/TodaysHabitsScreen';
import UserProfileDataContext from './contexts/App/UserProfileDataContext';
import UserHabitsDataContext from './contexts/App/UserHabitsDataContext';
import HabitRequestContext from './contexts/HabitsScreen/HabitRequestContext.js';
import GlobalStyles from './assets/css/GlobalStyles';
import GlobalReset from './assets/css/GlobalReset';

export default function App() {
    const [userProfileData, setUserProfileData] = useState('');
    const [userHabitsData, setUserHabitsData] = useState({ everyHabit: '', todaysHabits: '', todaysCompletionPercentage: 0 });
    const [areFixedBarsHidden, setAreFixedBarsHidden] = useState(true);
    const [isHabitRequestBeingValidated, setIsHabitRequestBeingValidated] = useState(false);

    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <UserProfileDataContext.Provider value={{ userProfileData, setUserProfileData }}>
                <UserHabitsDataContext.Provider value={{ userHabitsData, setUserHabitsData }}>
                    <HabitRequestContext.Provider
                        value={{ isHabitRequestBeingValidated, setIsHabitRequestBeingValidated }}
                    >
                        <TopBar isHidden={areFixedBarsHidden} />
                        <BottomBar isHidden={areFixedBarsHidden} />
                        <Routes>
                            <Route path="/" element={<LoginScreen setAreFixedBarsHidden={setAreFixedBarsHidden} />} />
                            <Route path="/cadastro" element={<RegistrationScreen setAreFixedBarsHidden={setAreFixedBarsHidden} />} />
                            <Route path="/habitos" element={<HabitsScreen setAreFixedBarsHidden={setAreFixedBarsHidden} />} />
                            <Route path="/hoje" element={<TodaysHabitsScreen setAreFixedBarsHidden={setAreFixedBarsHidden} />} />
                            <Route path="/historico" element={<RecordedDataScreen setAreFixedBarsHidden={setAreFixedBarsHidden} />} />
                        </Routes>

                    </HabitRequestContext.Provider>
                </UserHabitsDataContext.Provider>
            </UserProfileDataContext.Provider>
        </BrowserRouter>
    );
}
