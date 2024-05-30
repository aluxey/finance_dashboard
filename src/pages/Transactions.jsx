import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/listLinks.css';
import '../style/table.css';

const Transactions = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="transaction">
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
            <div className='tableTransaction'>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>21/05/2024</td>
                        <td>Course Leclerc</td>
                        <td>19.56 €</td>
                        <td>Living</td>
                        <td>
                            <button className='edit' type="button" onClick="">Edit</button>
                            <button className='delete' type="button" onClick="">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>17/05/2024</td>
                        <td>Achat vetement ASOS</td>
                        <td>64.99 €</td>
                        <td>Entertainement</td>
                        <td>
                            <button className='edit' type="button" onClick="">Edit</button>
                            <button className='delete' type="button" onClick="">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Transactions;


