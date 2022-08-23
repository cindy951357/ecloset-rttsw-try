import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import '../styles.css';
import { CalendarPage } from './CalendarPage/CalendarPage';
import { ClosetPage } from './ClosetPage/ClosetPage';
import { OutfitPage } from './OutfitPage/OutfitPage';
import { PickOutfitDatePage } from "./PickOutfitDatePage/PickOutfitDatePage";

import { NavBar } from './../components/NavBar/NavBar';
import { Header } from './../components/Header/Header';

import { PopupPage } from './PopupPage/PopupPage';

import classnames from 'classnames';

const appStyleClassName = classnames(
    'flex',
    'flex-col',
    'container',
    'max-h-full',
    'h-screen',
    'w-screen',
)

const App = () => {
    const { t } = useTranslation();


    return (
        <div id='app'
            className={appStyleClassName}
        >
            <Header></Header>
            <Router>
                <Routes>
                    <Route path="/closet" element={<ClosetPage />} />
                    <Route path="/outfit" element={<PickOutfitDatePage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="*" element={<CalendarPage />} />
                </Routes>
                <NavBar variant={''}></NavBar>
            </Router>

            <PopupPage />
        </div>
    )
}

export default App;