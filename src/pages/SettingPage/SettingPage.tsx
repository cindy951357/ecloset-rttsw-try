import React from 'react'
import i18n from 'i18next';
import classnames from 'classnames';

const settingPageClass = classnames(
    'page',
    'setting-page',

)

const SettingPage = () => {
    const onLangButtonClick = lang => {
        i18n.changeLanguage(lang);
    }
    return (
        <div className={settingPageClass}>
            <button
                onClick={() => { onLangButtonClick('tw') }}
            >
                繁體中文
            </button>
            <button
                onClick={() => { onLangButtonClick('en') }}
            >
                English
            </button>
        </div>
    )
}

export default SettingPage