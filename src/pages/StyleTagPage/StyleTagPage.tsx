
import { useSelector } from 'react-redux';
import { styleTagSelector } from '../../reducers/styleTags';

import { useTranslation } from 'react-i18next';

const StyleTagPage = ({}) => {
    const styleTags = useSelector(styleTagSelector);
    const {t} = useTranslation();

    return (
        <div className="style-tag-page page flex flex-col">
            <span className="input-text-and-add-btn flex mt-10">
                <input type="text"  className="flex w-40 mx-4 rounded-xl " 
                    maxLength={20} placeholder={t('<= 20chars')}
                /> 
                <button className="add-new-style-tag font-extrabold text-4xl 
                    flex justify-center items-center rounded-full bg-yellow-100">
                    <strong>+</strong>
                </button>
            </span>
            
            {styleTags.map((styleTag) =>(
                    <div className="fashion-style-tag bg-rose-200 rounded p-2 m-2 w-fit">
                        {styleTag.tagName}
                    </div>
                )
            )}
        </div>
    )
}

export { StyleTagPage };
