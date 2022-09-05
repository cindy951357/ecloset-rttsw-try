import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';

import { ViewCalendarPage } from './../../pages/ViewCalendarPage/ViewCalendarPage';
import { PickOutfitDatePage } from '../PickOutfitDatePage/PickOutfitDatePage';
import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';

const CalendarPage = () => {
    return (
        <div>
            <SecondNavBar />
            <Routes>
                <Route path='view-calendar' element={<ViewCalendarPage />}></Route>
                <Route path='add-calendar' element={<PickOutfitDatePage />}></Route>
                <Route path='*' element={<ViewCalendarPage />}></Route>
            </Routes>
        </div>
    )
}

export { CalendarPage };