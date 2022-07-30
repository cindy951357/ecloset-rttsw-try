import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

import './styles.css';


const App = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div id='app-component' className='bg-green-400'>
                <h1>{t('title')}</h1>
            </div>
            <Router>
                <div className="wrapper">
                    <div className="nav">
                        <Link to="/">{'About  '}</Link>
                        <Link to="/about">{'About  '}</Link>
                        <Link to="/contact">{'Contact  '}</Link>
                    </div>

                    <Routes>
                        <Route path="/" element={About} />
                        <Route path="/about" element={About} />
                        <Route path="/contact" element={Contact} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;