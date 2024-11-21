import React, { useState } from 'react';
import CameraList from './CameraList';
import CameraView from './CameraView';
import './comp-Watching.css';
import { useNavigate } from 'react-router-dom';

function CompWatching() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate('/add-device'); // Redirect to the Add Device page
  };

  return (
    <div className="comp-watching">
      <div className="header">
        <h1>Watching</h1>
        <div className="icons">
          {/* Notification Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon icon-bell"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.002 2.002 0 0018 14V7a2.002 2.002 0 00-1.595-1.995L15 4V2h-6v2l-1.405 1.405A2.002 2.002 0 005 7v7a2.002 2.002 0 00-.595 1.595L3 17h5m2 0v2a2 2 0 004 0v-2m-6 0h6"
            />
          </svg>

          {/* Device Icon */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon icon-device"
          > */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon icon-device"
            onClick={handleIconClick} // Handle click event
            style={{ cursor: 'pointer' }} // Optional: change cursor to pointer on hover
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1zm1 14h8v-2H8v2zm0-4h8v-2H8v2z"
            />
          </svg>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Camera"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <br />

      <div className="content-wrapper">
        <CameraList searchTerm={searchTerm} viewMode={viewMode} />
        <CameraView />
      </div>
    </div>
  );
}

export default CompWatching;
