// import React from 'react';
// import './EventsCaptured.css';

// const EventsCaptured = () => {
//   const events = [
//     { id: 1, type: 'Motion Captured', time: '12:00:01' },
//   ];

//   return (
//     <div className="events-captured">
//       <h2>Events Captured</h2>
//       <div className="events-list">
//         {events.map(event => (
//           <div key={event.id} className="event-item">
//             <img src="path_to_thumbnail.jpg" alt="Event thumbnail" />
//             <div className="event-info">
//               <span>{event.type}</span>
//               <span>{event.time}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsCaptured;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './VideoUpload.css'; // Assuming the CSS is in the same directory
// import Sidebar from './sidebar';
// import VideoHeader from './components-VideoUpload/VideoHeader';

function EventsCaptured() {
    const [videos, setVideos] = useState([]);
    const [prediction, setPrediction] = useState("");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5001/videos")
            .then(response => {
                console.log(response.data);
                setVideos(response.data.videos);
            })
            .catch(error => {
                console.error("There was an error fetching the videos!", error);
            });
    }, []);

    const handleDetectClick = (filename) => {
        setProgress(0); // Reset progress bar to 0
        const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress >= 90 ? prevProgress : prevProgress + 10));
        }, 500); // Simulate progress

        axios.post(`http://localhost:5001/detect/${filename}`)
            .then(response => {
                clearInterval(interval);
                setProgress(100); // Set progress bar to 100 when done
                setPrediction(response.data.prediction);
            })
            .catch(error => {
                clearInterval(interval);
                setProgress(0); // Reset progress bar if there was an error
                console.error("There was an error detecting the video!", error);
            });
    };

    return (
        <div className="video-Detection">
            {/* <Sidebar /> */}
            <div className='main-content'>
                {/* <VideoHeader /> */}
                {/* <div> */}
                    <p>Select a video to analyze:</p>
                    <div className="video-grid">
                        {videos.map((video, index) => (
                            <div key={index} className="video-container">
                                <video
                                    width="300"
                                    controls
                                    src={`http://localhost:5001/video/${video}`}
                                />
                                {/* <button onClick={() => handleDetectClick(video)}>Detect</button> */}
                            </div>
                        ))}
                    </div>

                    {progress > 0 && (
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
                                {progress}%
                            </div>
                        </div>
                    )}
                    <div className="prediction">
                        {prediction && <p>Prediction: {prediction}</p>}
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default EventsCaptured;











