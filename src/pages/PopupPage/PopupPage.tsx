import React from 'react'

import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { popupShowSelector } from '../../reducers/popup';
import { setPopupShowAndContent } from '../../actions/popup';

import { OutfitItem } from '../../components/OutfitItem/OutfitItem';


const PopupPage = () => {
    const dispatch = useDispatch();
    const {
        isShow,
        content,
    } = useSelector(popupShowSelector);

    const popupClassName = classnames(
        'pop-up-page',
        'p-6',
        'flex',
        'grid',
        'grid-rows-3',
        //grid-template-rows is specified in inline style in jsx part
        'w-full',
        'h-full',
        'z-1',
        {
            'hidden': !isShow,
        },
        'bg-[rgba(250,232,255,0.8)]',//'bg-fuchsia-100',
        'absolute',
    )
    return (
        <div
            className={popupClassName}
            style={{
                gridTemplateRows: '1fr 4fr 1fr',
            }}
        >
            <button
                onClick={() => {
                    dispatch(setPopupShowAndContent({
                        isShow: false,
                        content: null,
                    }))
                }}
                className={'justify-self-end'}
            >
                &#x2715;
            </button>
            {isShow && <OutfitItem
                viewMode={content.viewMode}
                clothFiles={content.clothFiles}
            />}
            <div>haha</div>
        </div>
    )
}

export { PopupPage };