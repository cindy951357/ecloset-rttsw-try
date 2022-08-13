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

import { NavBar } from './../components/NavBar/NavBar';
import { Header } from './../components/Header/Header';


import classnames from 'classnames';

const App = () => {
    const { t } = useTranslation();


    return (
        <div id='app'
            className='flex flex-col container max-h-full h-full w-full'
        >
            <Header></Header>
            <Router>
                <Routes>
                    <Route path="/closet" element={<ClosetPage />} />
                    <Route path="/outfit" element={<OutfitPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="*" element={<CalendarPage />} />
                </Routes>
                <NavBar variant={''}></NavBar>
            </Router>
        </div>
    )
}

export default App;