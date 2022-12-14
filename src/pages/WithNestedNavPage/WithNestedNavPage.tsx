import React from 'react'
import {
    Routes,
    Route,
    Outlet,
} from 'react-router-dom';

import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';

const WithNestedNavPage = ({
    navItemList,
    defaultNavItem,
}) => {
    return (
        <div className={'closet-page row-span-[10]'}>
            <SecondNavBar
                variant={'second-layer'}
                navItemList={navItemList}
                defaultNavItem={defaultNavItem}
            />
            <Outlet />
        </div >
    )
}

export { WithNestedNavPage };