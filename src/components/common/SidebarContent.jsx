import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/sidebar.css';
import '../../style/App.css';

const SidebarContent = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default SidebarContent; // Ensure default export
