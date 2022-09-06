import React from 'react'
import {
    Routes,
    Route,
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
            <Routes>
                <Route index element={navItemList[0].RouteComponent}></Route>
                {navItemList.map((navItemElem) => {
                    return <Route key={navItemElem.linkTo}
                        path={navItemElem.linkTo}
                        element={navItemElem.RouteComponent}>
                    </Route>
                })}
            </Routes>
        </div >
    )
}

export { WithNestedNavPage };