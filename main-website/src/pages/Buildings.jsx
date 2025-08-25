import React from 'react';
import './Buildings.css';

const floors = [
    {
        floor: '1st Floor',
        areas: [
            { name: 'Library' },
            { name: 'Administrator Office' },
        ],
    },
    {
        floor: '2nd Floor',
        areas: [
            { name: 'Labs' },
            { name: 'Lecture Halls' },
        ],
    },
];

export default function Buildings() {
    return (
        <div className="building-page">
            {/* Top: Card Selector */}
            <div className="card-selector">
                {[...Array(5)].map((_, i) => (
                    <div className="card-item" key={i}>
                        Building {i + 1}
                    </div>
                ))}
            </div>

            {/* Main Content: Image + Dropdowns */}
            <div className="building-main">
                <div className="building-image">
                    <img src="/images/GPBuilding.png" alt="Building" />
                </div>

                <div className="building-dropdowns">
                    {floors.map((floor, idx) => (
                        <details key={idx} className="floor-dropdown">
                            <summary>{floor.floor}</summary>
                            <ul>
                                {floor.areas.map((area, i) => (
                                    <li key={i}>{area.name}</li>
                                ))}
                            </ul>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}
