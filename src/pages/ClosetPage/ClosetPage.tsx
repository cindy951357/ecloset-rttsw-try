import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';

import { ViewClosetPage } from '../ViewClosetPage/ViewClosetPage';
import { AddClosetPage } from '../AddClosetPage/AddClosetPage';
import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';
import { WithNestedNavPage } from '../WithNestedNavPage/WithNestedNavPage';

const NAV_VIEW_CLOSET = 'NAV_VIEW_CLOSET';
const NAV_ADD_CLOSET = 'NAV_ADD_CLOSET';

const navItemList = [
    {
        linkTo: '/closet/view-closet',
        i18n: 'nav.viewClosest',
        navNameConstant: NAV_VIEW_CLOSET,
        iconName: 'fa-heart',
        RouteComponent: <ViewClosetPage />,
    },
    {
        linkTo: '/closet/add-closet',
        i18n: 'nav.addCloset',
        navNameConstant: NAV_ADD_CLOSET,
        iconName: 'fa-heart',
        RouteComponent: <AddClosetPage />,
    },
];

const ClosetPage = () => {
    return (
        <div className={'closet-page row-span-[10]'}>
            <WithNestedNavPage navItemList={navItemList} defaultNavItem={NAV_VIEW_CLOSET} />
        </div>
    )
}

export { ClosetPage };