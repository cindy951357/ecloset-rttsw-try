import React, { useState, useEffect } from 'react'
import i18n from 'i18next';
import classnames from 'classnames';
import { DropdownInput } from '../../components/DropdownInput/DropdownInput';

const settingPageClass = classnames(
    'page',
    'setting-page',

)
const enName = 'English';
const twName = '繁體中文';
const SettingPage = () => {
    const [userLang, setUserLang] = useState('tw');

    useEffect(() => {
        if (userLang === twName) {
            i18n.changeLanguage('tw');
        } else if (userLang === enName) {
            i18n.changeLanguage('en');
        }
    }, [userLang]);

    return (
        <div className={settingPageClass}>
            <DropdownInput
                layer={'FIRST'}
                setParentSelected={setUserLang}
                optionList={[enName, twName]}
                clearSecondLayerDefaultOption={() => { }}
                secondLayerDefaultOption={''}
            />
        </div>
    )
}

export default SettingPage