
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styleTagSelector } from '../../reducers/styleTags';

import { useTranslation } from 'react-i18next';

import { addStyleTag } from '../../actions/styleTags';

const StyleTagPage = ({}) => {
    const styleTags = useSelector(styleTagSelector);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [inputStyleTag, setInputStyleTag] = useState('');

    const onAddStyleTagBtnClick = () => {
        dispatch(addStyleTag({
            tagName: inputStyleTag,
        }));
        setInputStyleTag("");
    }

    return (
        <div className="style-tag-page page flex flex-col">
            <div className="input-container w-full drop-shadow-md bg-gradient-to-b
                from-transparent to-zinc-100 pb-1">
                <span className="input-text-and-add-btn flex mt-10">
                    <input type="text"  className="flex w-40 mx-4 rounded-xl " 
                        maxLength={20} placeholder={t('<= 20chars')}
                        value={inputStyleTag} onChange={e => setInputStyleTag(e.target.value)}
                    /> 
                    <button className="add-new-style-tag font-extrabold text-4xl 
                        flex justify-center items-center rounded-full bg-yellow-100"
                        onClick={onAddStyleTagBtnClick}
                    >
                        <strong>+</strong>
                    </button>
                </span>
            </div>
           
            <div className="tags-container max-h-[550px] overflow-y-auto flex flex-wrap flex-col">
                {styleTags.map((styleTag) =>(
                        <div className="fashion-style-tag bg-rose-200 rounded p-2 m-2 w-fit
                            flex flefx-wrawp
                        ">
                            {styleTag.tagName}
                        </div>
                    )
                )}
            </div>
            
        </div>
    )
}

export { StyleTagPage };
