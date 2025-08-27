import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "@fontsource/inter/600.css"


export default function Home() {
    return (
        <div className="App">
            <div className="welcome">
                <h1 className="welcome2">Welcome to</h1>
                <h1 className="welcome1">Informatics</h1>
                <h1 className="welcome1">Institute of</h1>
                <h1 className="welcome1">Technology</h1>
                <h1 className="welcome3">Discover where learning meets fun, </h1>
                <h1 className="welcome3">friends, and endless possibilities. </h1>
                <Link to="/map" className="welcome-link">
                    <button className="welcome-button">
                        Start Exploring <i className="fas fa-arrow-right"></i>
                    </button>
                </Link>

            </div>
            <div className="table-wrapper">
                <table className="custom-table">
                    <tbody>
                        <tr>
                            <td colSpan="2" className="merged-cell top">
                                <div className="cell-content">

                                    <h2>Common Guidlines</h2>
                                    <img src="./images/commonGuidlines.png" className="cell-bg-image" />

                                    <button className="cell-button">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="merged-cell bottom">
                                <div className="cell-content">
                                    <h2>Meet the team</h2>
                                    <img src="./images/meetTheTeam.png" className="cell-bg-image" />

                                    <button className="cell-button"><i className="fas fa-arrow-right"></i></button>
                                </div>
                            </td>
                            <td className="merged-cell bottom">
                                <div className="cell-content">
                                    <img src="./images/roles.png" className="cell-bg-image" />
                                    <h2>Roles</h2>
                                    <button className="cell-button"><i className="fas fa-arrow-right"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}