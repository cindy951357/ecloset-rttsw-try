import React from "react";
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    NavLink 
} from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Contact from '../components/Contact.jsx';
import About from '../components/About.jsx';

import '../styles.css';
const activeStyle = {
    textDecoration: "underline",
  };

const activeClassName = "underline";

const App = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div id='app-component' className='bg-green-400'>
                <h1>{t('title')}</h1>
            </div>
            <Router>
                <nav>
                    <ul>
                        <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                            }
                        >
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                            }
                        >
                            Tasks
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/">
                            {({ isActive }) => (
                            <span
                                className={
                                isActive ? activeClassName : undefined
                                }
                            >
                                Home
                            </span>
                            )}
                        </NavLink>
                        </li>
                    </ul>
                    </nav> 

                    <Routes>
                        <Route path="/" element={<About/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
            </Router>
        </div>
    )
}

export default App;