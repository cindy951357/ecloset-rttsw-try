import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';

import { ViewClosetPage } from '../ViewClosetPage/ViewClosetPage';
import { AddClosetPage } from '../AddClosetPage/AddClosetPage';
import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';

const NAV_VIEW_CLOSET = 'NAV_VIEW_CLOSET';
const NAV_ADD_CLOSET = 'NAV_ADD_CLOSET';

const navItemList = [
    {
        linkTo: '/view-closet',
        i18n: 'nav.viewClosest',
        navNameConstant: NAV_VIEW_CLOSET,
        iconName: 'fa-heart'
    },
    {
        linkTo: '/add-closet',
        i18n: 'nav.addCloset',
        navNameConstant: NAV_ADD_CLOSET,
        iconName: 'fa-heart'
    },
];

const ClosetPage = () => {
    return (
        <div className={'closet-page row-span-[10]'}>
            <SecondNavBar
                variant={'second-layer'}
                navItemList={navItemList}
                defaultNavItem={NAV_VIEW_CLOSET}
            />
            <Routes>
                <Route index element={<ViewClosetPage />}></Route>
                <Route path='view-closet' element={<ViewClosetPage />}></Route>
                <Route path='add-closet' element={<AddClosetPage />}></Route>
            </Routes>
        </div>
    )
}

export { ClosetPage };