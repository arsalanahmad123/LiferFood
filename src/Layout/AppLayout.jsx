import React, { memo, useState } from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import messages_en from '../language/en.json';
import messages_de from '../language/de.json';
import { IntlProvider } from 'react-intl';

const messages = {
    en: messages_en,
    de: messages_de,
};

const AppLayout = () => (WrappedComponent) => {

    const MemoWrappedComponent = memo(WrappedComponent)
    return (props) => {
        const [locale, setLocale] = useState('en');

        const changeLocale = (newLocale) => {
            setLocale(newLocale);
        };

        return (
            <>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    {/* <Navbar /> */}
                    <Navbar locale={locale} changeLocale={changeLocale} />
                    <SideBar />
                    <MemoWrappedComponent {...props} />
                </IntlProvider>
            </>
        )
    }
}

export default AppLayout
