import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import '../styles.css';
import { CalendarPage } from './CalendarPage/CalendarPage';
import { ClosetPage } from './ClosetPage/ClosetPage';
import { ViewOutfitPage } from './ViewOutfitPage/ViewOutfitPage';
import { PickOutfitDatePage } from "./PickOutfitDatePage/PickOutfitDatePage";

import { NavBar } from './../components/NavBar/NavBar';
import { Header } from './../components/Header/Header';

import { PopupPage } from './PopupPage/PopupPage';

import classnames from 'classnames';
import SettingPage from "./SettingPage/SettingPage";
import './App.scss';
import { ViewCalendarPage } from "./ViewCalendarPage/ViewCalendarPage";
import { ViewClosetPage } from "./ViewClosetPage/ViewClosetPage";
import { AddClosetPage } from "./AddClosetPage/AddClosetPage";
import { OutfitPage } from "./OutfitPage/OutfitPage";
import { AddOutfitPage } from "./AddOutfitPage/AddOutfitPage";
import { StyleTagPage } from "./StyleTagPage/StyleTagPage";

const App = () => {
    const { t } = useTranslation();

    return (
        <div id='app'
            className={''}
        >
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="closet" element={<ClosetPage />} >
                        <Route path="view-closet" element={<ViewClosetPage />} />
                        <Route path="add-closet" element={<AddClosetPage />} />
                        <Route index element={<ViewClosetPage />} />
                    </Route>
                    <Route path="style-tags" element={<StyleTagPage />} />
                    <Route path="outfit" element={<OutfitPage />} >
                        <Route path="view-outfit" element={<ViewOutfitPage />} />
                        <Route path="add-outfit" element={<AddOutfitPage />} />
                        <Route index element={<ViewOutfitPage />} />
                    </Route>
                    <Route path="/" element={<CalendarPage />}>
                        <Route path="view-calendar" element={<ViewCalendarPage />} />
                        <Route path="add-calendar" element={<PickOutfitDatePage />} />
                        <Route index element={<ViewCalendarPage />} />
                    </Route>
                    
                    <Route path="setting" element={<SettingPage />} />
                    <Route path='*' element={<Navigate to='/' replace />} >
                    </Route>
                </Routes>
                <NavBar variant={''}></NavBar>
                <PopupPage />
            </Router>
        </div>
    )
}

export default App;