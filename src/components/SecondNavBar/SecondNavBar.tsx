import React, {
    HTMLAttributes,
    useState,
    useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

import classnames from 'classnames';

import { NavItem } from './../NavItem/NavItem';

interface Props extends HTMLAttributes<HTMLUListElement> {
    variant: String,
    navItemList: Array<{
        i18n: string,
        linkTo: string,
        navNameConstant: string,
        iconName: string,
    }>,
    defaultNavItem,
}

const NAV_VIEW_CALENDAR = 'NAV_VIEW_CALENDAR';
const NAV_ADD_CALENDAR = 'NAV_ADD_CALENDAR';


const SecondNavBar = ({ ...props }: Props) => {
    const { t } = useTranslation();
    const {
        navItemList,
        defaultNavItem,
    } = props
    const [curPage, setCurPage] = useState(defaultNavItem);



    const secondNavBarClass: string = classnames(
        'second_nav_bar',
        'flex',
        'flex-row',
        'w-screen',
    );


    const liClassNames = classnames(
        'flex',
        'grow-0',
        'shrink-0',
        'basis-[50%]',
        'bg-white',
        'items-center',
        'justify-center',
    )
    return (
        <ul
            id="second_nav_bar"
            className={secondNavBarClass}
        >

            {
                navItemList.map(navItem => (
                    <li key={navItem.i18n}
                        className={liClassNames}
                        onClick={() => { setCurPage(navItem.navNameConstant) }}
                    >
                        <Link to={navItem.linkTo}>
                            <NavItem
                                text={t(navItem.i18n)}
                                variant='second-layer'
                                active={curPage === navItem.navNameConstant}
                                fontawesomeiconname={navItem.iconName}
                            >
                            </NavItem>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export {
    SecondNavBar,
};
export type { Props };