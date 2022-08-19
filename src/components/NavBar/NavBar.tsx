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

const NAV_CLOSET = 'NAV_CLOSET';
const NAV_OUTFIT = 'NAV_OUTFIT';
const NAV_CALENDAR = 'NAV_CALENDAR';
const NAV_TAGS = 'NAV_TAGS';
const NAV_SETTING = 'NAV_SETTING';

const defaultClassNames = classnames(
    'flex',
    'grow-0',
    'shrink-0',
    'basis-[20%]',
    'bg-white',
    'items-center',
    'justify-center',
)

const navItemList = [
    {
        linkTo: '/closet',
        i18n: 'Closet',
        navNameConstant: NAV_CLOSET,
    },
    {
        linkTo: '/outfit',
        i18n: 'Outfit',
        navNameConstant: NAV_OUTFIT,
    },
    {
        linkTo: '/calendar',
        i18n: 'Calendar',
        navNameConstant: NAV_CALENDAR,
    },
    {
        linkTo: '/tags',
        i18n: 'Tags',
        navNameConstant: NAV_TAGS,
    },
    {
        linkTo: '/setting',
        i18n: 'Setting',
        navNameConstant: NAV_SETTING,
    }
]

const NavBar = ({ variant = '', ...props }: Props) => {
    const { t } = useTranslation();
    const [curPage, setCurPage] = useState(NAV_CALENDAR);


    return (
        <ul id='nav_bar'
            className='flex flex-row w-screen flex-1'
        >

            {
                navItemList.map(navItem => (
                    <li key={navItem.i18n}
                        className={defaultClassNames}
                        onClick={() => { setCurPage(navItem.navNameConstant) }}
                    >
                        <Link to={navItem.linkTo}>
                            <NavItem text={t(navItem.i18n)} variant='first-layer'
                                active={curPage === navItem.navNameConstant}>
                            </NavItem>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export {
    NavBar,
};
export type { Props };