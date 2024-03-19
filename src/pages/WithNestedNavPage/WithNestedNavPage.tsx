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
        <div className={'closet-page'}>
            <Outlet />
            <SecondNavBar
                variant={'second-layer'}
                navItemList={navItemList}
                defaultNavItem={defaultNavItem}
            />            
        </div >
    )
}

export { WithNestedNavPage };