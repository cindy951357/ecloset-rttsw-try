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
}

const NAV_VIEW_CALENDAR = 'NAV_VIEW_CALENDAR';
const NAV_ADD_CALENDAR = 'NAV_ADD_CALENDAR';



const navItemList = [
    {
        linkTo: '/view-calendar',
        i18n: 'nav.viewCalendar',
        navNameConstant: NAV_VIEW_CALENDAR,
        iconName: 'fa-heart'
    },
    {
        linkTo: '/add-calendar',
        i18n: 'nav.addCalendar',
        navNameConstant: NAV_ADD_CALENDAR,
        iconName: 'fa-heart'
    },
]

const SecondNavBar = ({ variant = '', ...props }: Props) => {
    const { t } = useTranslation();
    const [curPage, setCurPage] = useState(NAV_VIEW_CALENDAR);

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