import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/listLinks.css';
import '../style/table.css';
import '../style/expense.css';
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
}))

const Transactions = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const [expenseDate, setExpenseDate] = useState('');
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseCategory, setExpenseCategory] = useState('');
    const [expenses, setExpenses] = useState([]);


    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const categories = [
        { name: 'Fix costs', color: 'green' },
        { name: 'Living costs', color: 'blue' },
        { name: 'Emergency costs', color: 'yellow' },
        { name: 'Placement costs', color: 'purple' },
        { name: 'Entertainment costs', color: 'pink' },
        { name: 'Savings costs', color: 'black' },
        { name: 'Animal costs', color: 'white' },
        { name: 'Furnishings costs', color: 'red' },
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add expense to the table
        setExpenses([...expenses, { name: expenseName, amount: expenseAmount, category: expenseCategory, date:expenseDate}]);
        // Clear form fields
        setExpenseName('');
        setExpenseAmount('');
        setExpenseCategory('');
        setExpenseDate('');
        // Close the modal
        closeModal();
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

            <button onClick={openModal}>Add Expense</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Add Expense</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="expenseDate">Expense Date:</label>
                                <input type="date" id="expenseDate" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseName">Expense Name:</label>
                                <input type="text" id="expenseName" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseAmount">Expense Amount:</label>
                                <input type="number" id="expenseAmount" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expenseCategory">Expense Category:</label>
                                <select id="expenseCategory" value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)} required>
                                    <option value="">Select category</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category.name}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}

            <div className='tableTransaction'>
                <table>
                    <thead>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Actions</th>
                    </thead>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.date}</td>
                                <td>{expense.name}</td>
                                <td>{expense.amount}</td>
                                <td style={{background: categories.find(cat => cat.name === expense.category)?.color}}>{expense.category}</td>
                                <td>
                                    <CustomButton variant="contained" color="primary" startIcon={<EditIcon/>}>
                                        Edit
                                    </CustomButton>
                                    <CustomButton variant="contained" color="secondary" startIcon={<DeleteIcon/>}>
                                        Delete
                                    </CustomButton>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    );
};

export default Transactions;
