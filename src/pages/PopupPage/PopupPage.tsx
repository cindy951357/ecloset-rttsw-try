import React from 'react'

import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';

import { popupShowSelector } from '../../reducers/popup';
import { setPopupShowAndContent } from '../../actions/popup';

const PopupPage = () => {
    const dispatch = useDispatch();
    const popup = useSelector(popupShowSelector);

    const popupClassName: string = classnames(
        'pop-up-page',
        'p-6',
        'flex',
        'grid',
        'grid-rows-3',
        //grid-template-rows is specified in inline style in jsx part
        'w-full',
        'h-full',
        'z-50',
        'top-0',
        {
            'hidden': !popup.isShow,
        },
        'bg-[rgba(249,168,212,0.8)]',//'bg-rose-200',
        'absolute',
    );

    const messageClass: string = classnames(
        'popup-message',
        'text-white',
    );

    return (
        <div
            className={popupClassName}
        >
            <button
                onClick={() => {
                    dispatch(setPopupShowAndContent({
                        isShow: false,
                        content: null,
                    }));

                }}
                className={'justify-self-end'}
            >
                &#x2715;
            </button>

            {popup.isShow && <div className={messageClass}>{popup.content.message}</div>}
        </div>
    )
}

export { PopupPage };