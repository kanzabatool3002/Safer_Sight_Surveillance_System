import React from 'react';
import Sidebar from './sidebar';
import CompWatching from './components-Watch/comp-Watching';
import './Watching.css';

function Watching() {
  return (
    <div className="my-watching">
      <Sidebar />
      <div className="main-content">
         <CompWatching /> 
        </div>
     
    </div>
  );
}

export default Watching;
