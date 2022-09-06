import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';

import { ViewCalendarPage } from './../../pages/ViewCalendarPage/ViewCalendarPage';
import { PickOutfitDatePage } from '../PickOutfitDatePage/PickOutfitDatePage';
import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';
import { WithNestedNavPage } from '../WithNestedNavPage/WithNestedNavPage';

const NAV_VIEW_CALENDAR = 'NAV_VIEW_CALENDAR';
const NAV_ADD_CALENDAR = 'NAV_ADD_CALENDAR';

const navItemList = [
    {
        linkTo: 'view-calendar',
        i18n: 'nav.viewCalendar',
        navNameConstant: NAV_VIEW_CALENDAR,
        iconName: 'fa-heart',
        RouteComponent: <ViewCalendarPage />,
    },
    {
        linkTo: 'add-calendar',
        i18n: 'nav.addCalendar',
        navNameConstant: NAV_ADD_CALENDAR,
        iconName: 'fa-heart',
        RouteComponent: <PickOutfitDatePage />
    },
];

const CalendarPage = () => {
    return (
        <div className={'calendar-page'}>
            <WithNestedNavPage navItemList={navItemList} defaultNavItem={NAV_VIEW_CALENDAR} />
        </div>
    )
}

export { CalendarPage };