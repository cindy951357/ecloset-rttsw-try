import React from 'react'
import {
    Outlet,
} from 'react-router-dom';

import { SecondNavBar } from '../../components/SecondNavBar/SecondNavBar';

const WithNestedNavPage = ({
    navItemList,
    defaultNavItem,
}) => {
    return (
        <div className={'h-full with-second-navbar'}>
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