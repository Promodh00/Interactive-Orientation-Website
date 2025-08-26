import React from 'react';
import './buildings.css';
import { useParams } from 'react-router-dom';
import buildingData from '../data/BuildingInfo.json'; // Adjust path if needed

export default function BuildingInfoPage() {
    const { id } = useParams(); // e.g., 'gp-square'
    const building = buildingData.find(b => b.id === id);

    if (!building) return <p>Building not found.</p>;

    return (
        <div className="building-info-wrapper">
            <h1 className="building-title">{building.title}</h1>

            <div className="building-content">
                {/* Image Section */}
                <div className="building-image-container">
                    <img src={building.image} alt={building.title} className="building-image" />
                </div>

                {/* Dropdowns Section */}
                <div className="building-dropdowns">
                    {/* Description */}
                    <details className="dropdown-section" open>
                        <summary>Description</summary>
                        <p>{building.description}</p>
                    </details>

                    {/* Floors and Sections */}
                    {building.floors.map((floor, floorIndex) => (
                        <details key={floorIndex} className="dropdown-section">
                            <summary>{floor.name}</summary>

                            {floor.sections.map((section, sectionIndex) => (
                                <details key={sectionIndex} className="nested-dropdown">
                                    <summary>{section.name}</summary>
                                    <p>{section.description}</p>
                                </details>
                            ))}
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}
