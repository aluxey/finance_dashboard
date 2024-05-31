import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import SidebarContent from './components/common/SidebarContent';
import Footer from './components/common/Footer';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import './style/App.css';
import './style/sidebar.css'
import Transactions from "./pages/Transactions";
import Savings from "./pages/Savings";
import Placement from "./pages/Placement";
import Income from "./pages/Income";
import Login from "./pages/Login";



const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="sidebar">
                    <Header />
                    <SidebarContent />
                    <Footer />
                </div>
                <main>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/income" element={<Income />} />
                        <Route path="/savings" element={<Savings />} />
                        <Route path="/placement" element={<Placement />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
