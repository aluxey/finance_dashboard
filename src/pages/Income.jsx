import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/listLinks.css';
import '../style/table.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
    padding: '10px',
    textAlign: 'center',
    marginRight: '25px',
    border: 'none',
    borderRadius: '4px',
}));

const Income = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="income">
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
                    <thead>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Actions</th>
                    </thead>
                    <tr>
                        <td>05/05/2024</td>
                        <td>Salaire</td>
                        <td>1240.56 €</td>
                        <td>
                            <CustomButton variant="contained" color="primary" startIcon={<EditIcon/>}>
                                Edit
                            </CustomButton>
                            <CustomButton variant="contained" color="secondary" startIcon={<DeleteIcon/>}>
                                Delete
                            </CustomButton>
                        </td>
                    </tr>
                    <tr>
                        <td>01/05/2024</td>
                        <td>Allocations</td>
                        <td>190.56 €</td>
                        <td>
                            <CustomButton variant="contained" color="primary" startIcon={<EditIcon/>}>
                                Edit
                            </CustomButton>
                            <CustomButton variant="contained" color="secondary" startIcon={<DeleteIcon/>}>
                                Delete
                            </CustomButton>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Income;


