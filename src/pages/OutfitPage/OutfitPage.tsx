import React from 'react'
import { WithNestedNavPage } from '../WithNestedNavPage/WithNestedNavPage';
import { AddOutfitPage } from '../AddOutfitPage/AddOutfitPage';
import { ViewOutfitPage } from '../ViewOutfitPage/ViewOutfitPage';

const NAV_VIEW_OUTFIT = 'NAV_VIEW_OUTFIT';
const NAV_ADD_OUTFIT = 'NAV_ADD_OUTFIT';

const navItemList = [
    {
        linkTo: 'view-outfit',
        i18n: 'nav.viewOutfit',
        navNameConstant: NAV_VIEW_OUTFIT,
        iconName: 'fa-heart',
        RouteComponent: <ViewOutfitPage />,
    },
    {
        linkTo: 'add-outfit',
        i18n: 'nav.addOutfit',
        navNameConstant: NAV_ADD_OUTFIT,
        iconName: 'fa-heart',
        RouteComponent: <AddOutfitPage />,
    },
];

const OutfitPage = () => {
    return (
        <div className={'outfit-page page'}>
            <WithNestedNavPage navItemList={navItemList} defaultNavItem={NAV_VIEW_OUTFIT} />
        </div>
    )
}

export { OutfitPage };