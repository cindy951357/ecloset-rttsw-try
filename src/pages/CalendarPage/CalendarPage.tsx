import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';

import { ViewCalendarPage } from './../../pages/ViewCalendarPage/ViewCalendarPage';
import { PickOutfitDatePage } from '../PickOutfitDatePage/PickOutfitDatePage';
import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';

const NAV_VIEW_CALENDAR = 'NAV_VIEW_CALENDAR';
const NAV_ADD_CALENDAR = 'NAV_ADD_CALENDAR';

const navItemList = [
    {
        linkTo: '/view-calendar',
        i18n: 'nav.viewCalendar',
        navNameConstant: NAV_VIEW_CALENDAR,
        iconName: 'fa-heart'
    },
    {
        linkTo: '/add-calendar',
        i18n: 'nav.addCalendar',
        navNameConstant: NAV_ADD_CALENDAR,
        iconName: 'fa-heart'
    },
];

const CalendarPage = () => {
    return (
        <div className={'calendar-page'}>
            <SecondNavBar
                variant={'second-layer'}
                navItemList={navItemList}
                defaultNavItem={NAV_VIEW_CALENDAR}
            />
            <Routes>
                <Route index element={<ViewCalendarPage />}></Route>
                <Route path='view-calendar' element={<ViewCalendarPage />}></Route>
                <Route path='add-calendar' element={<PickOutfitDatePage />}></Route>
            </Routes>
        </div>
    )
}

export { CalendarPage };