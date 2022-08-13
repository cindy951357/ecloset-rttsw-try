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
import { NavItem } from './../NavItem/NavItem';

interface Props extends HTMLAttributes<HTMLUListElement> {
    variant: String,
}

const NAV_CLOSET = 'NAV_CLOSET';
const NAV_OUTFIT = 'NAV_OUTFIT';
const NAV_CALENDAR = 'NAV_CALENDAR';
const NAV_TAGS = 'NAV_TAGS';
const NAV_SETTING = 'NAV_SETTING';

const NavBar = ({ variant = '', ...props }: Props) => {
    const { t } = useTranslation();
    const [curPage, setCurPage] = useState(NAV_CALENDAR);

    const liClassNames = 'flex grow-0 shrink-0 basis-[20%] bg-rose-100 items-center justify-center';

    return (
        <ul id='nav_bar'
            className='flex flex-row w-screen flex-1'
        >
            <li className={liClassNames}>
                <Link to='/closet'>
                    <NavItem text={t('Closet')} variant='first-layer' active={curPage === NAV_CLOSET}></NavItem>
                </Link>
            </li>
            <li className={liClassNames}>
                <Link to='/outfit'>
                    <NavItem text={t('Outfit')} variant='first-layer' active={curPage === NAV_OUTFIT}></NavItem>
                </Link>
            </li>
            <li className={liClassNames}>
                <Link to='/calendar'>
                    <NavItem text={t('Calendar')} variant='first-layer' active={curPage === NAV_CALENDAR}></NavItem>
                </Link>
            </li>
            <li className={liClassNames}>
                <Link to='/tags'>
                    <NavItem text={t('Tags')} variant='first-layer' active={curPage === NAV_TAGS}></NavItem>
                </Link>
            </li>
            <li className={liClassNames}>
                <Link to='/settings'>
                    <NavItem text={t('Settings')} variant='first-layer' active={curPage === NAV_SETTING}></NavItem>
                </Link>
            </li>
        </ul>
    )
}

export {
    NavBar,
}