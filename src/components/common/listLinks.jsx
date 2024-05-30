import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../style/listLinks.css';

const ListeLinks = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="listLinks">
            <ul>
                <li className={activeLink === "/" ? "active" : ""}>
                    <Link to="/" onClick={() => handleLinkClick("/")}>Overview</Link>
                </li>
                <li className={activeLink === "/transactions" ? "active" : ""}>
                    <Link to="/transactions" onClick={() => handleLinkClick("/transactions")}>Transactions</Link>
                </li>
                <li className={activeLink === "/income" ? "active" : ""}>
                    <Link to="/income" onClick={() => handleLinkClick("/income")}>Income</Link>
                </li>
                <li className={activeLink === "/savings" ? "active" : ""}>
                    <Link to="/savings" onClick={() => handleLinkClick("/savings")}>Savings</Link>
                </li>
                <li className={activeLink === "/placement" ? "active" : ""}>
                    <Link to="/placement" onClick={() => handleLinkClick("/placement")}>Placement</Link>
                </li>
            </ul>
        </div>
    );
};

export default ListeLinks;


