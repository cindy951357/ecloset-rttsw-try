import React from 'react'
import { ViewClosetPage } from '../ViewClosetPage/ViewClosetPage';
import { AddClosetPage } from '../AddClosetPage/AddClosetPage';
import { WithNestedNavPage } from '../WithNestedNavPage/WithNestedNavPage';

const NAV_VIEW_CLOSET = 'NAV_VIEW_CLOSET';
const NAV_ADD_CLOSET = 'NAV_ADD_CLOSET';

const navItemList = [
    {
        linkTo: 'view-closet',
        i18n: 'nav.viewClosest',
        navNameConstant: NAV_VIEW_CLOSET,
        iconName: 'fa-heart',
        RouteComponent: <ViewClosetPage />,
    },
    {
        linkTo: 'add-closet',
        i18n: 'nav.addCloset',
        navNameConstant: NAV_ADD_CLOSET,
        iconName: 'fa-heart',
        RouteComponent: <AddClosetPage />,
    },
];

const ClosetPage = () => {
    return (
        <div className={'closet-page page'}>
            <WithNestedNavPage navItemList={navItemList} defaultNavItem={NAV_VIEW_CLOSET} />
        </div>
    )
}

export { ClosetPage };