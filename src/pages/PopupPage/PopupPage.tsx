import React from 'react'

import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { popupShowSelector } from '../../reducers/popup';
import { setPopupShow } from '../../actions/popup';


const PopupPage = () => {
    const dispatch = useDispatch();
    const popupShow = useSelector(popupShowSelector);

    const popupClassName = classnames(
        'pop-up-page',
        'flex',
        'w-screen',
        'h-screen',
        'z-1',
        {
            'hidden': !popupShow.isShow,
        },
        'bg-fuchsia-100',
        'absolute',
        'opacity-80',
    )
    return (
        <div
            className={popupClassName}
        >
            <button
                onClick={() => {
                    dispatch(setPopupShow(false))
                }}
                className={'justify-self-end'}
            >
                &#x2715;
                haha
            </button>
            PopupPage

        </div>
    )
}

export { PopupPage };