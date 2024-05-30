import React from 'react';
import CustomLineChart from "../components/charts/LineChart";
import ListeLinks from "../components/common/listLinks";
import remainingIcon from '../assets/images/remaining.png';
import income from '../assets/images/income.png';
import outcome from '../assets/images/outcome.png';
import '../style/container.css'



const Dashboard = () => {
    return (
            <div className="dashboard">
                <div className="nav-bar">
                    <ListeLinks />
                </div>
                <div className="recap">
                    <div className='container'>
                        <div className='container-header'>
                            <div>
                                <h1 className='title-container'>Remaining</h1>
                                <p className='date-container'>Apr 01 - Apr 31</p>
                            </div>
                            <img className='img-container' src={remainingIcon} alt='iconRemaining'></img>
                        </div>
                        <div className='container-content'>
                            <h2 className='total'>1.234,90 €</h2>
                            <p className='evolution'>+2% from last period</p>
                        </div>

                    </div>

                    <div className='container'>
                        <div className='container-header'>
                            <div>
                                <h1 className='title-container'>Remaining</h1>
                                <p className='date-container'>Apr 01 - Apr 31</p>
                            </div>
                            <img className='img-container' src={income} alt='iconRemaining'></img>
                        </div>
                        <div className='container-content'>
                        <h2 className='total'>1.234,90 €</h2>
                            <p className='evolution'>+2% from last period</p>
                        </div>

                    </div>

                    <div className='container'>
                        <div className='container-header'>
                            <div>
                                <h1 className='title-container'>Outcome</h1>
                                <p className='date-container'>Apr 01 - Apr 31</p>
                            </div>
                            <img className='img-container' src={outcome} alt='iconRemaining'></img>
                        </div>
                        <div className='container-content'>
                        <h2 className='total'>534,90 €</h2>
                            <p className='evolution'>-7% from last period</p>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Dashboard; // Ensure default export
