// import React, { useRef, useEffect, useState } from 'react';
// import './VideoPlayer.css';
// import Webcam from 'react-webcam';

// const VideoPlayer = () => {
//   const webcamRef = useRef(null);
//   const videoRef = useRef(null);
//   const [error, setError] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [volume, setVolume] = useState(0.5);

//   const videoConstraints = {
//     width: 400,
//     height: 380,
//     facingMode: 'user'
//   };

//   useEffect(() => {
//     const startVideo = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
//         const video = videoRef.current;
//         video.srcObject = stream;
//         video.muted = true; // Mute the audio by default
//         video.play();

//         const webcamVideo = webcamRef.current;
//         webcamVideo.srcObject = stream;
//         webcamVideo.play();
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//         setError('Error accessing camera: ' + error.message);
//       }
//     };

//     startVideo();
//   }, [videoConstraints]);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     // Simulate volume change (not supported by the browser)
//   };

//   return (
//     <div className="video-player">
//       <h2>Multi Layer View</h2>
//       <div className="video-container">
//         <Webcam audio={false} videoConstraints={videoConstraints} ref={webcamRef} />
//         <div className="video-controls">
//           <button onClick={handlePlayPause}>{isPlaying ? '❚❚' : '▶'}</button>
//           {/* Add volume control element here */}
//           <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
//         </div>
//       </div>
//       <div className="stats">
//         <div>Individuals: <span>08</span></div>
//         <div>Vehicles: <span>01</span></div>
//       </div>
//       <video ref={videoRef} muted style={{ display: 'none' }} />
//     </div>
//   );
// };

// export default VideoPlayer;
























// import React, { useRef, useEffect, useState } from 'react';
// import './VideoPlayer.css';
// import Webcam from 'react-webcam';

// const VideoPlayer = () => {
//   const webcamRef = useRef(null);
//   const videoRef = useRef(null);
//   const [error, setError] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [volume, setVolume] = useState(0.5);
//   const [isWebcamRunning, setIsWebcamRunning] = useState(false);

//   const videoConstraints = {
//     width: 400,
//     height: 380,
//     facingMode: 'user'
//   };

//   useEffect(() => {
//     const startVideo = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
//         const video = videoRef.current;
//         video.srcObject = stream;
//         video.muted = true; // Mute the audio by default
//         video.play();

//         const webcamVideo = webcamRef.current;
//         webcamVideo.srcObject = stream;
//         webcamVideo.play();
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//         setError('Error accessing camera: ' + error.message);
//       }
//     };

//     startVideo();
//   }, [videoConstraints]);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     // Simulate volume change (not supported by the browser)
//   };
//   const startWebcamDetection = async () => {
//     const response = await fetch('http://127.0.0.1:5001/start_webcam', { method: 'POST' });
//     const data = await response.json();
//     setIsWebcamRunning(true);
//     console.log(data.message);
//   };

//   const stopWebcamDetection = async () => {
//     const response = await fetch('http://127.0.0.1:5001/stop_webcam', { method: 'POST' });
//     const data = await response.json();
//     setIsWebcamRunning(false);
//     console.log(data.message);
//   };


//   return (
//     <div className="video-player">
//       <h2>Multi Layer View</h2>
//       <div className="video-container">
//         <Webcam audio={false} videoConstraints={videoConstraints} ref={webcamRef} />
//         <div className="video-controls">
//           <button onClick={handlePlayPause}>{isPlaying ? '❚❚' : '▶'}</button>
//           <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
//           <button onClick={startWebcamDetection} disabled={isWebcamRunning}>
//             Start Webcam Detection
//           </button>
//           <button onClick={stopWebcamDetection} disabled={!isWebcamRunning}>
//             Stop Webcam Detection
//           </button>
//         </div>
//       </div>
//       <div className="stats">
//         <div>Individuals: <span>08</span></div>
//         <div>Vehicles: <span>01</span></div>
//       </div>
//       <video ref={videoRef} muted style={{ display: 'none' }} />
//     </div>
//   );
// };

// export default VideoPlayer;




















// import React, { useRef, useEffect, useState } from 'react';
// import './VideoPlayer.css';
// import Webcam from 'react-webcam';

// const VideoPlayer = () => {
//   const webcamRef = useRef(null);
//   const videoRef = useRef(null);
//   const [error, setError] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [volume, setVolume] = useState(0.5);
//   const [isWebcamRunning, setIsWebcamRunning] = useState(false);

//   // const videoConstraints = {
//   //   width: 400,
//   //   height: 380,
//   //   facingMode: 'user'
//   // };

//   const videoConstraints = {
//     video: {
//       width: 400,
//       height: 380,
//       facingMode: 'user'
//     },
//     audio: false // or true if you want audio
//   };


//   useEffect(() => {
//     const startVideo = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
//         const video = videoRef.current;
//         video.srcObject = stream;
//         video.muted = true; // Mute the audio by default
//         video.play();

//         const webcamVideo = webcamRef.current;
//         webcamVideo.srcObject = stream;
//         webcamVideo.play();
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//         setError('Error accessing camera: ' + error.message);
//       }
//     };

//     startVideo();
//   }, [videoConstraints]);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     // Simulate volume change (not supported by the browser)
//   };

//   const startWebcamDetection = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5001/start_webcam', { method: 'POST' });
//       const data = await response.json();
//       setIsWebcamRunning(true);
//       console.log(data.message);
//     } catch (error) {
//       console.error('Error starting webcam detection:', error);
//       setError('Error starting webcam detection: ' + error.message);
//     }
//   };

//   const stopWebcamDetection = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5001/stop_webcam', { method: 'POST' });
//       const data = await response.json();
//       setIsWebcamRunning(false);
//       console.log(data.message);
//     } catch (error) {
//       console.error('Error stopping webcam detection:', error);
//       setError('Error stopping webcam detection: ' + error.message);
//     }
//   };


//   return (
//     <div className="video-player">
//       <h2>Multi Layer View</h2>
//       <div className="video-container">
//         <Webcam audio={false} videoConstraints={videoConstraints} ref={webcamRef} />
//         <div className="video-controls">
//           <button onClick={handlePlayPause}>{isPlaying ? '❚❚' : '▶'}</button>
//           <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
//           <button onClick={startWebcamDetection} disabled={isWebcamRunning}>
//             Start Webcam Detection
//           </button>
//           <button onClick={stopWebcamDetection} disabled={!isWebcamRunning}>
//             Stop Webcam Detection
//           </button>
//         </div>
//       </div>
//       <div className="stats">
//         <div>Individuals: <span>08</span></div>
//         <div>Vehicles: <span>01</span></div>
//       </div>
//       <video ref={videoRef} muted style={{ display: 'none' }} />
//       {error && <div className="error">{error}</div>} {/* Display any error messages */}
//     </div>
//   );
// };

// export default VideoPlayer;




















// import React, { useRef, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import './VideoPlayer.css';

// const VideoPlayer = () => {
//   const webcamRef = useRef(null);
//   const [error, setError] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [volume, setVolume] = useState(0.5);
//   const [isWebcamRunning, setIsWebcamRunning] = useState(false);

//   // const [isWebcamRunning, setIsWebcamRunning] = useState(false);

//   const videoConstraints = {
//     video: {
//       width: 400,
//       height: 380,
//       facingMode: 'user'
//     },
//     audio: false // Set to true if you need audio
//   };

//   const handleUserMedia = (stream) => {
//     console.log("Camera access granted");
//     // The Webcam component handles the video stream automatically
//   };

//   const handleUserMediaError = (error) => {
//     console.error('Error accessing camera:', error);
//     setError('Error accessing camera: ' + error.message);
//   };

//   // const startWebcamDetection = async () => {
//   //   const response = await fetch('http://127.0.0.1:5001/start_webcam', { method: 'POST' });
//   //   const data = await response.json();
//   //   setIsWebcamRunning(true);
//   //   console.log(data.message);
//   // };

//   // const stopWebcamDetection = async () => {
//   //   const response = await fetch('http://127.0.0.1:5001/stop_webcam', { method: 'POST' });
//   //   const data = await response.json();
//   //   setIsWebcamRunning(false);
//   //   console.log(data.message);
//   // };


//   const startWebcamDetection = async () => {
//     if (isWebcamRunning) {
//       console.log('Webcam is already running');
//       return;
//     }
//     const response = await fetch('http://127.0.0.1:5001/start_webcam', { method: 'POST' });
//     const data = await response.json();
//     setIsWebcamRunning(true);
//     console.log(data.message);
//   };

//   const stopWebcamDetection = async () => {
//     const response = await fetch('http://127.0.0.1:5001/stop_webcam', { method: 'POST' });
//     const data = await response.json();
//     setIsWebcamRunning(false);
//     console.log(data.message);
//   };

//   return (
//     <div className="video-player">
//       <h2>Multi Layer View</h2>
//       <div className="video-container">
//         <Webcam
//           audio={false}
//           videoConstraints={videoConstraints}
//           ref={webcamRef}
//           onUserMedia={handleUserMedia}
//           onUserMediaError={handleUserMediaError}
//         />
//         <div className="video-controls">
//           <button onClick={() => setIsPlaying(!isPlaying)}>
//             {isPlaying ? '❚❚' : '▶'}
//           </button>
//           <input type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(e.target.value)} />
//           <button onClick={startWebcamDetection} disabled={isWebcamRunning}>
//             Start Webcam Detection
//           </button>
//           <button onClick={stopWebcamDetection} disabled={!isWebcamRunning}>
//             Stop Webcam Detection
//           </button>
//         </div>
//       </div>
//       <div className="stats">
//         <div>Individuals: <span>08</span></div>
//         <div>Vehicles: <span>01</span></div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;



















// import React, { useState, useEffect, useRef } from 'react';

// const VideoPlayer = () => {
// const [isWebcamRunning, setIsWebcamRunning] = useState(false);
// const videoRef = useRef(null);

// const startWebcamDetection = async () => {
//     console.log('Attempting to start webcam detection...');
//     if (isWebcamRunning) {
//         console.log('Webcam is already running');
//         return;
//     }

//     try {
//         const response = await fetch('http://127.0.0.1:5001/start_webcam', { method: 'POST' });
//         const data = await response.json();

//         if (response.ok) {
//             setIsWebcamRunning(true);
//             console.log(data.message);
//             startVideo(); // Start the video stream
//         } else {
//             console.error('Failed to start webcam:', data.message);
//         }
//     } catch (error) {
//         console.error('Error starting webcam detection:', error);
//     }
// };

// const stopWebcamDetection = async () => {
//     if (!isWebcamRunning) {
//         console.log('Webcam is not running');
//         return;
//     }

//     try {
//         const response = await fetch('http://127.0.0.1:5001/stop_webcam', { method: 'POST' });
//         const data = await response.json();

//         if (response.ok) {
//             setIsWebcamRunning(false);
//             console.log(data.message);
//             stopVideo(); // Stop the video stream
//         } else {
//             console.error('Failed to stop webcam:', data.message);
//         }
//     } catch (error) {
//         console.error('Error stopping webcam detection:', error);
//     }
// };

// const startVideo = async () => {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//     } catch (error) {
//         console.error('Error accessing camera:', error);
//     }
// };

// const stopVideo = () => {
//     const stream = videoRef.current.srcObject;
//     if (stream) {
//         const tracks = stream.getTracks();
//         tracks.forEach(track => track.stop());
//         videoRef.current.srcObject = null;
//     }
// };

// useEffect(() => {
//     return () => {
//         // Cleanup: stop video on component unmount
//         stopVideo();
//     };
// }, []);

// return (
//     <div>
//         <video ref={videoRef} autoPlay style={{ width: '600px', height: '400px' }} />
//         <button onClick={startWebcamDetection}>Start Webcam</button>
//         <button onClick={stopWebcamDetection}>Stop Webcam</button>
//         <p>{isWebcamRunning ? 'Webcam is running...' : 'Webcam is stopped.'}</p>
//     </div>
// );







//     const videoRef = useRef(null);
//     const [prediction, setPrediction] = useState(''); // To store the prediction text
//     // const videoRef = useRef(null);
//     // const [prediction, setPrediction] = useState(''); // To store the prediction text
// const [stream, setStream] = useState(null); // To store the webcam stream
// const [captureIntervalId, setCaptureIntervalId] = useState(null); // To store the frame capture interval ID


//     // Function to start the webcam and begin prediction
//     const startPrediction = () => {
//         if (navigator.mediaDevices.getUserMedia) {
//             navigator.mediaDevices
//                 .getUserMedia({ video: true })
//                 .then((stream) => {
//                     videoRef.current.srcObject = stream;
//                     captureAndSendFrames(); // Automatically start capturing frames for prediction
//                 })
//                 .catch((error) => {
//                     console.error('Error accessing webcam:', error);
//                 });
//         }
//     };

//     // Continuously capture and send frames to backend for prediction
//     const captureAndSendFrames = () => {
//         const canvas = document.createElement('canvas');
//         const captureInterval = setInterval(async () => {
//             if (videoRef.current) {
//                 canvas.width = videoRef.current.videoWidth;
//                 canvas.height = videoRef.current.videoHeight;
//                 canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//                 // Convert the canvas to a data URL
//                 const frameData = canvas.toDataURL('image/jpeg');

//                 // Convert data URL to Blob
//                 try {
//                     const blobData = dataURLToBlob(frameData);

//                     // Append the Blob to form data
//                     const formData = new FormData();
//                     formData.append('frame', blobData, 'frame.jpg');

//                     // Send the frame to the Flask backend
//                     const response = await fetch('http://localhost:5001/predict', {
//                         method: 'POST',
//                         body: formData,
//                     });

//                     if (!response.ok) {
//                         throw new Error(`Server error: ${response.status}`);
//                     }

//                     const data = await response.json();
//                     setPrediction(data.prediction); // Update prediction state
//                 } catch (error) {
//                     console.error('Error in prediction:', error);
//                     clearInterval(captureInterval); // Stop capturing frames if error occurs
//                 }
//             }
//         }, 1000 / 20); // Capture frames at 20 FPS
//     };

//     // // Helper function to convert data URL to Blob
//     // const dataURLToBlob = (dataURL) => {
//     //     // Ensure the data URL is valid
//     //     if (!dataURL || typeof dataURL !== 'string') {
//     //         throw new Error('Invalid data URL');
//     //     }

//     //     // Split the Data URL into its components
//     //     const arr = dataURL.split(',');

//     //     // Check if the split resulted in the expected number of parts
//     //     if (arr.length !== 2) {
//     //         throw new Error('Invalid data URL format');
//     //     }

//     //     const mime = arr[0].match(/:(.*?);/)[1];
//     //     const bstr = atob(arr[1]);
//     //     const n = bstr.length;
//     //     const u8arr = new Uint8Array(n);

//     //     // Populate the Uint8Array with the binary data
//     //     for (let i = 0; i < n; i++) {
//     //         u8arr[i] = bstr.charCodeAt(i);
//     //     }

//     //     return new Blob([u8arr], { type: mime });

//     // };


//     const dataURLToBlob = (dataURL) => {
//         // Ensure the data URL is valid and contains the expected parts
//         if (!dataURL || typeof dataURL !== 'string' || !dataURL.includes(',')) {
//             throw new Error('Invalid data URL format');
//         }

//         // Split the Data URL into its components
//         const arr = dataURL.split(',');

//         // Ensure the split resulted in the expected two parts
//         if (arr.length !== 2) {
//             throw new Error('Invalid data URL format');
//         }

//         const mime = arr[0].match(/:(.*?);/)[1]; // Extract mime type
//         const bstr = atob(arr[1]); // Decode base64 string
//         const n = bstr.length;
//         const u8arr = new Uint8Array(n);

//         // Populate the Uint8Array with the binary data
//         for (let i = 0; i < n; i++) {
//             u8arr[i] = bstr.charCodeAt(i);
//         }

//         return new Blob([u8arr], { type: mime });
//     };

//     // Function to stop the webcam stream and prediction
//     const stopPrediction = () => {
//         // Stop capturing frames by clearing the interval
//         if (captureInterval) {
//             clearInterval(captureInterval);
//             setCaptureInterval(null);
//         }

//         // Stop the video stream
//         if (stream) {
//             stream.getTracks().forEach((track) => track.stop());
//             setStream(null);
//         }

//         // Clear the video and prediction
//         videoRef.current.srcObject = null;
//         setPrediction('');
//     };

//     return (
//         <div className='video_prediction'>
//             <h2>Real-Time Action Detection</h2>
//             <video ref={videoRef} autoPlay muted style={{ width: '100%' }}></video>
//             <button type='button' onClick={startPrediction}>Start Prediction</button>
//             <button type='button' onClick={stopPrediction}>Stop Prediction</button>
//             <h3>Prediction: {prediction}</h3>
//         </div>
//     );
// };










//     const [stream, setStream] = useState(null); // To store the webcam stream
//     const [captureIntervalId, setCaptureIntervalId] = useState(null); // To store the frame capture interval ID

//     const videoRef = useRef(null);
//     const [prediction, setPrediction] = useState(''); // To store the prediction text

//     // Function to start the webcam and begin prediction
//     const startPrediction = () => {
//         if (navigator.mediaDevices.getUserMedia) {
//             navigator.mediaDevices
//                 .getUserMedia({ video: true })
//                 .then((stream) => {
//                     videoRef.current.srcObject = stream;
//                     captureAndSendFrames(); // Automatically start capturing frames for prediction
//                 })
//                 .catch((error) => {
//                     console.error('Error accessing webcam:', error);
//                 });
//         }
//     };

//     // Continuously capture and send frames to backend for prediction
//     const captureAndSendFrames = () => {
//         const canvas = document.createElement('canvas');
//         const intervalId = setInterval(async () => {
//             // Ensure the video element is ready and streaming
//             if (videoRef.current && videoRef.current.readyState === 4) {
//                 const videoWidth = videoRef.current.videoWidth;
//                 const videoHeight = videoRef.current.videoHeight;

//                 // Check if the video dimensions are valid
//                 if (videoWidth > 0 && videoHeight > 0) {
//                     canvas.width = videoWidth;
//                     canvas.height = videoHeight;
//                     const context = canvas.getContext('2d');

//                     // Draw the video frame to the canvas
//                     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//                     // Convert the canvas to a data URL
//                     const frameData = canvas.toDataURL('image/jpeg');

//                     try {
//                         const blobData = dataURLToBlob(frameData);

//                         // Append the Blob to form data
//                         const formData = new FormData();
//                         formData.append('frame', blobData, 'frame.jpg');

//                         // Send the frame to the Flask backend
//                         const response = await fetch('http://localhost:5001/predict', {
//                             method: 'POST',
//                             body: formData,
//                         });

//                         if (!response.ok) {
//                             throw new Error(`Server error: ${response.status}`);
//                         }
//                         const data = await response.json();
//                         setPrediction(data.prediction); // Update prediction state
//                     } catch (error) {
//                         console.error('Error in prediction:', error);
//                         stopPrediction(); // Stop capturing frames if error occurs
//                     }
//                 }
//             }
//         }, 1000 / 20); // Capture frames at 20 FPS

//         setCaptureIntervalId(intervalId); // Store the interval ID so we can stop it later
//     };


//     //                     const data = await response.json();
//     //                     setPrediction(data.prediction); // Update prediction state
//     //                 } catch (error) {
//     //                     console.error('Error in prediction:', error);
//     //                     // clearInterval(captureInterval); // Stop capturing frames if error occurs
//     //                     stopPrediction();
//     //                 }
//     //             } else {
//     //                 console.log('Video is not ready.');
//     //             }
//     //         }
//     //     }, 1000 / 20); // Capture frames at 20 FPS
//     //     setCaptureIntervalId(intervalId);
//     // };

//     // Helper function to convert data URL to Blob
//     const dataURLToBlob = (dataURL) => {
//         if (!dataURL || typeof dataURL !== 'string' || !dataURL.includes(',')) {
//             console.error('Invalid data URL:', dataURL); // Log the invalid data URL for debugging
//             throw new Error('Invalid data URL format');
//         }

//         const arr = dataURL.split(',');

//         if (arr.length !== 2) {
//             throw new Error('Invalid data URL format');
//         }

//         const mime = arr[0].match(/:(.*?);/)[1];
//         const bstr = atob(arr[1]);
//         const n = bstr.length;
//         const u8arr = new Uint8Array(n);

//         for (let i = 0; i < n; i++) {
//             u8arr[i] = bstr.charCodeAt(i);
//         }

//         return new Blob([u8arr], { type: mime });
//     };

//     // const stopPrediction = () => {
//     //     // Stop capturing frames by clearing the interval
//     //     if (captureInterval) {
//     //         clearInterval(captureInterval);
//     //         setCaptureInterval(null);
//     //     }

//     //     // Stop the video stream
//     //     if (stream) {
//     //         stream.getTracks().forEach((track) => track.stop());
//     //         setStream(null);
//     //     }

//     //     // Clear the video and prediction
//     //     videoRef.current.srcObject = null;
//     //     setPrediction('');
//     // };





//     // Function to stop the webcam and stop capturing frames
//     const stopPrediction = () => {
//         if (captureIntervalId) {
//             clearInterval(captureIntervalId); // Stop the frame capturing
//             setCaptureIntervalId(null); // Reset the interval ID
//         }

//         if (stream) {
//             const tracks = stream.getTracks();
//             tracks.forEach((track) => track.stop()); // Stop each track in the stream (e.g., video)
//             setStream(null); // Clear the stream reference
//         }

//         // Reset the video element
//         if (videoRef.current) {
//             videoRef.current.srcObject = null;
//         }

//         setPrediction(''); // Clear the prediction text
//     };

//     return (
//         <div>
//             <h2>Real-Time Action Detection</h2>
//             <video ref={videoRef} autoPlay muted style={{ width: '100%' }}></video>
//             <button onClick={startPrediction}>Start Prediction</button>
//             <button type='button' onClick={stopPrediction}>Stop Prediction</button>
//             <h3>Prediction: {prediction}</h3>
//         </div>
//     );
// };

// export default VideoPlayer;





















// import React, { useRef, useState } from 'react';

// const CameraComponent = () => {
//     const videoRef = useRef(null);
//     const [prediction, setPrediction] = useState(''); // To store the prediction text
//     const [stream, setStream] = useState(null); // To store the webcam stream
//     const [captureIntervalId, setCaptureIntervalId] = useState(null); // To store the frame capture interval ID

//     // Function to start the webcam and begin prediction
//     const startPrediction = () => {
//         if (navigator.mediaDevices.getUserMedia) {
//             navigator.mediaDevices
//                 .getUserMedia({ video: true })
//                 .then((stream) => {
//                     videoRef.current.srcObject = stream;
//                     setStream(stream); // Store the stream for later use
//                     captureAndSendFrames(); // Automatically start capturing frames for prediction
//                 })
//                 .catch((error) => {
//                     console.error('Error accessing webcam:', error);
//                 });
//         }
//     };

//     // Continuously capture and send frames to backend for prediction
//     const captureAndSendFrames = () => {
//         const canvas = document.createElement('canvas');
//         const intervalId = setInterval(async () => {
//             // Ensure the video element is ready and streaming
//             if (videoRef.current && videoRef.current.readyState === 4) {
//                 const videoWidth = videoRef.current.videoWidth;
//                 const videoHeight = videoRef.current.videoHeight;

//                 // Check if the video dimensions are valid
//                 if (videoWidth > 0 && videoHeight > 0) {
//                     canvas.width = videoWidth;
//                     canvas.height = videoHeight;
//                     const context = canvas.getContext('2d');

//                     // Draw the video frame to the canvas
//                     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//                     // Convert the canvas to a data URL
//                     const frameData = canvas.toDataURL('image/jpeg');

//                     try {
//                         const blobData = dataURLToBlob(frameData);

//                         // Append the Blob to form data
//                         const formData = new FormData();
//                         formData.append('frame', blobData, 'frame.jpg');

//                         // Send the frame to the Flask backend
//                         const response = await fetch('http://localhost:5001/predict', {
//                             method: 'POST',
//                             body: formData,
//                         });

//                         if (!response.ok) {
//                             throw new Error(`Server error: ${response.status}`);
//                         }

//                         const data = await response.json();
//                         setPrediction(data.prediction); // Update prediction state
//                     } catch (error) {
//                         console.error('Error in prediction:', error);
//                         stopPrediction(); // Stop capturing frames if error occurs
//                     }
//                 }
//             }
//         }, 1000 / 20); // Capture frames at 20 FPS

//         setCaptureIntervalId(intervalId); // Store the interval ID
//     };

//     // Helper function to convert data URL to Blob
//     const dataURLToBlob = (dataURL) => {
//         if (!dataURL || typeof dataURL !== 'string' || !dataURL.includes(',')) {
//             console.error('Invalid data URL:', dataURL); // Log the invalid data URL for debugging
//             throw new Error('Invalid data URL format');
//         }

//         const arr = dataURL.split(',');

//         if (arr.length !== 2) {
//             throw new Error('Invalid data URL format');
//         }

//         const mime = arr[0].match(/:(.*?);/)[1];
//         const bstr = atob(arr[1]);
//         const n = bstr.length;
//         const u8arr = new Uint8Array(n);

//         for (let i = 0; i < n; i++) {
//             u8arr[i] = bstr.charCodeAt(i);
//         }

//         return new Blob([u8arr], { type: mime });
//     };

//     // Function to stop the webcam and stop capturing frames
//     const stopPrediction = () => {
//         // Clear the capture interval if it exists
//         if (captureIntervalId) {
//             clearInterval(captureIntervalId); // Stop the frame capturing
//             setCaptureIntervalId(null); // Reset the interval ID
//         }

//         // Stop the video stream if it exists
//         if (stream) {
//             stream.getTracks().forEach((track) => track.stop()); // Stop each track in the stream (e.g., video)
//             setStream(null); // Clear the stream reference
//         }

//         // Reset the video element
//         if (videoRef.current) {
//             videoRef.current.srcObject = null;
//         }

//         setPrediction(''); // Clear the prediction text
//     };

//     return (
//         <div>
//             <h2>Real-Time Action Detection</h2>
//             <video ref={videoRef} autoPlay muted style={{ width: '100%' }}></video>
//             <div>
//                 <button onClick={startPrediction}>Start Prediction</button>
//                 {/* <button type='button' onClick={stopPrediction}>Stop Prediction</button> */}
//             </div>
//             <h3>Prediction: {prediction}</h3>
//         </div>
//     );
// };

// export default CameraComponent;























// import React, { useRef, useState } from 'react';

// const VideoPlayer = () => {
//     const [stream, setStream] = useState(null); // To store the webcam stream
//     const [captureIntervalId, setCaptureIntervalId] = useState(null); // To store the frame capture interval ID

//     const videoRef = useRef(null);
//     const [prediction, setPrediction] = useState(''); // To store the prediction text

//     // Function to start the webcam and begin prediction
//     const startPrediction = () => {
//         if (navigator.mediaDevices.getUserMedia) {
//             navigator.mediaDevices
//                 .getUserMedia({ video: true })
//                 .then((stream) => {
//                     videoRef.current.srcObject = stream;
//                     setStream(stream); // Save the stream to state
//                     captureAndSendFrames(); // Automatically start capturing frames for prediction
//                 })
//                 .catch((error) => {
//                     console.error('Error accessing webcam:', error);
//                 });
//         }
//     };

//     // Continuously capture and send frames to backend for prediction
//     const captureAndSendFrames = () => {
//         const canvas = document.createElement('canvas');
//         const intervalId = setInterval(async () => {
//             // Ensure the video element is ready and streaming
//             if (videoRef.current && videoRef.current.readyState === 4) {
//                 const videoWidth = videoRef.current.videoWidth;
//                 const videoHeight = videoRef.current.videoHeight;

//                 // Check if the video dimensions are valid
//                 if (videoWidth > 0 && videoHeight > 0) {
//                     canvas.width = videoWidth;
//                     canvas.height = videoHeight;
//                     const context = canvas.getContext('2d');

//                     // Draw the video frame to the canvas
//                     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//                     // Convert the canvas to a data URL
//                     const frameData = canvas.toDataURL('image/jpeg');

//                     try {
//                         const blobData = dataURLToBlob(frameData);

//                         // Append the Blob to form data
//                         const formData = new FormData();
//                         formData.append('frame', blobData, 'frame.jpg');

//                         // Send the frame to the Flask backend
//                         const response = await fetch('http://localhost:5001/predict', {
//                             method: 'POST',
//                             body: formData,
//                         });

//                         if (!response.ok) {
//                             throw new Error(`Server error: ${response.status}`);
//                         }
//                         const data = await response.json();
//                         setPrediction(data.prediction); // Update prediction state
//                     } catch (error) {
//                         console.error('Error in prediction:', error);
//                         stopPrediction(); // Stop capturing frames if error occurs
//                     }
//                 }
//             }
//         }, 1000 / 20); // Capture frames at 20 FPS

//         setCaptureIntervalId(intervalId); // Store the interval ID so we can stop it later
//     };

//     // Helper function to convert data URL to Blob
//     const dataURLToBlob = (dataURL) => {
//         if (!dataURL || typeof dataURL !== 'string' || !dataURL.includes(',')) {
//             console.error('Invalid data URL:', dataURL);
//             throw new Error('Invalid data URL format');
//         }

//         const arr = dataURL.split(',');

//         if (arr.length !== 2) {
//             throw new Error('Invalid data URL format');
//         }

//         const mime = arr[0].match(/:(.*?);/)[1];
//         const bstr = atob(arr[1]);
//         const n = bstr.length;
//         const u8arr = new Uint8Array(n);

//         for (let i = 0; i < n; i++) {
//             u8arr[i] = bstr.charCodeAt(i);
//         }

//         return new Blob([u8arr], { type: mime });
//     };

//     // Function to stop the webcam and stop capturing frames
//     const stopPrediction = () => {
//         setPrediction(''); // Clear the prediction text
//         if (captureIntervalId) {
//             clearInterval(captureIntervalId); // Stop the frame capturing
//             setCaptureIntervalId(null); // Reset the interval ID
//         }

//         if (stream) {
//             const tracks = stream.getTracks();
//             tracks.forEach((track) => track.stop()); // Stop each track in the stream (e.g., video)
//             setStream(null); // Clear the stream reference
//         }

//         // Reset the video element
//         if (videoRef.current) {
//             videoRef.current.srcObject = null;
//         }


//     };

//     // Handle key press to stop prediction when 'q' is pressed
//     const handleKeyPress = (event) => {
//         if (event.key === 'q') {
//             stopPrediction(); // Stop prediction and camera when 'q' is pressed
//         }
//     };

//     // Add event listener for key press
//     React.useEffect(() => {
//         window.addEventListener('keypress', handleKeyPress);
//         return () => {
//             window.removeEventListener('keypress', handleKeyPress); // Cleanup event listener
//         };
//     }, []);

//     return (
//         <div>
//             <h2>Real-Time Action Detection</h2>
//             <video ref={videoRef} autoPlay muted style={{ width: '100%' }}></video>
//             <button onClick={startPrediction}>Start Prediction</button>
//             <button type='button' onClick={stopPrediction}>Stop Prediction</button>
//             <h3>Prediction: {prediction}</h3>
//         </div>
//     );
// };

// export default VideoPlayer;














// CURRECT


import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css';
import Webcam from 'react-webcam';

const VideoPlayer = () => {



    // import React, { useRef, useState } from 'react';

    // const VideoPlayer = () => {
    const [stream, setStream] = useState(null); // To store the webcam stream
    const [captureIntervalId, setCaptureIntervalId] = useState(null); // To store the frame capture interval ID
    const videoRef = useRef(null);
    const [prediction, setPrediction] = useState(''); // To store the prediction text

    // Function to start the webcam and begin prediction
    const startPrediction = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    setStream(stream); // Save the stream to state
                    captureAndSendFrames(); // Automatically start capturing frames for prediction
                })
                .catch((error) => {
                    console.error('Error accessing webcam:', error);
                });
        }
    };

    // Continuously capture and send frames to backend for prediction
    const captureAndSendFrames = () => {
        const canvas = document.createElement('canvas');
        const intervalId = setInterval(async () => {
            // Ensure the video element is ready and streaming
            if (videoRef.current && videoRef.current.readyState === 4) {
                const videoWidth = videoRef.current.videoWidth;
                const videoHeight = videoRef.current.videoHeight;

                // Check if the video dimensions are valid
                if (videoWidth > 0 && videoHeight > 0) {
                    canvas.width = videoWidth;
                    canvas.height = videoHeight;
                    const context = canvas.getContext('2d');

                    // Draw the video frame to the canvas
                    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

                    // Convert the canvas to a data URL
                    const frameData = canvas.toDataURL('image/jpeg');

                    try {
                        const blobData = dataURLToBlob(frameData);

                        // Append the Blob to form data
                        const formData = new FormData();
                        formData.append('frame', blobData, 'frame.jpg');

                        // Send the frame to the Flask backend
                        const response = await fetch('http://localhost:5001/predict', {
                            method: 'POST',
                            body: formData,
                        });

                        if (!response.ok) {
                            throw new Error(`Server error: ${response.status}`);
                        }
                        const data = await response.json();
                        setPrediction(data.prediction); // Update prediction state
                    } catch (error) {
                        console.error('Error in prediction:', error);
                        stopPrediction(); // Stop capturing frames if error occurs
                    }
                }
            }
        }, 1000 / 20); // Capture frames at 20 FPS

        setCaptureIntervalId(intervalId); // Store the interval ID so we can stop it later
    };

    // Helper function to convert data URL to Blob
    const dataURLToBlob = (dataURL) => {
        if (!dataURL || typeof dataURL !== 'string' || !dataURL.includes(',')) {
            console.error('Invalid data URL:', dataURL);
            throw new Error('Invalid data URL format');
        }

        const arr = dataURL.split(',');

        if (arr.length !== 2) {
            throw new Error('Invalid data URL format');
        }

        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        const n = bstr.length;
        const u8arr = new Uint8Array(n);

        for (let i = 0; i < n; i++) {
            u8arr[i] = bstr.charCodeAt(i);
        }

        return new Blob([u8arr], { type: mime });
    };

    // Function to stop the webcam and stop capturing frames
    // const stopPrediction = () => {
    //     setPrediction(''); // Clear the prediction text
    //     if (captureIntervalId) {
    //         clearInterval(captureIntervalId); // Stop the frame capturing immediately
    //         setCaptureIntervalId(null); // Reset the interval ID
    //     }

    //     if (stream) {
    //         const tracks = stream.getTracks();
    //         tracks.forEach((track) => track.stop()); // Stop each track in the stream (e.g., video)
    //         setStream(null); // Clear the stream reference
    //     }

    //     // Reset the video element
    //     if (videoRef.current) {
    //         videoRef.current.srcObject = null;
    //     }
    // };

    const stopPrediction = async () => {
        setPrediction(''); // Clear the prediction text
        if (captureIntervalId) {
            clearInterval(captureIntervalId); // Stop the frame capturing immediately
            setCaptureIntervalId(null); // Reset the interval ID
        }
    
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop()); // Stop each track in the stream (e.g., video)
            setStream(null); // Clear the stream reference
        }
    
        // Reset the video element
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    
        // Stop the alarm sound in the backend
        try {
            const response = await fetch('http://localhost:5001/stop-alarm', {
                method: 'POST',
            });
    
            if (!response.ok) {
                throw new Error('Failed to stop the alarm');
            }
        } catch (error) {
            console.error('Error stopping the alarm:', error);
        }
    };

    // Handle key press to stop prediction when 'q' is pressed
    const handleKeyPress = (event) => {
        if (event.key === 'q') {
            stopPrediction(); // Stop prediction and camera when 'q' is pressed
        }
    };

    // Add event listener for key press
    React.useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress); // Cleanup event listener
        };
    }, []);

    return (
        <div>
            {/* <h2>Real-Time Action Detection</h2> */}
            <video
                ref={videoRef}
                autoPlay
                muted
                style={{
                    height: '33rem',
                    width: '100%',
                    border: '3px solid #3498db',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            ></video>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={startPrediction}
                    style={{
                        padding: '10px 20px',
                        border: 'none',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        borderRadius: '5px',
                        marginRight: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Start Prediction
                </button>
                <button
                    type="button"
                    onClick={stopPrediction}
                    style={{
                        padding: '10px 20px',
                        border: 'none',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Stop Prediction
                </button>
            </div>
            <h3 style={{ marginTop: '20px', fontSize: '2rem', paddingBottom: '20px' }}>Prediction: {prediction}</h3>

        </div>
    );
};

export default VideoPlayer;













// import React, { useRef, useEffect, useState } from 'react';
// import './VideoPlayer.css';
// import Webcam from 'react-webcam';

// const VideoPlayer = () => {
//     const [stream, setStream] = useState(null);
//     const [captureIntervalId, setCaptureIntervalId] = useState(null);
//     const videoRef = useRef(null);
//     const [prediction, setPrediction] = useState('');

//     const startPrediction = () => {
//         if (navigator.mediaDevices.getUserMedia) {
//             navigator.mediaDevices
//                 .getUserMedia({ video: true })
//                 .then((stream) => {
//                     videoRef.current.srcObject = stream;
//                     setStream(stream);
//                     captureAndSendFrames();
//                 })
//                 .catch((error) => {
//                     console.error('Error accessing webcam:', error);
//                 });
//         }
//     };

//     const captureAndSendFrames = () => {
//         const canvas = document.createElement('canvas');
//         const intervalId = setInterval(async () => {
//             if (videoRef.current && videoRef.current.readyState === 4) {
//                 const videoWidth = videoRef.current.videoWidth;
//                 const videoHeight = videoRef.current.videoHeight;

//                 if (videoWidth > 0 && videoHeight > 0) {
//                     canvas.width = videoWidth;
//                     canvas.height = videoHeight;
//                     const context = canvas.getContext('2d');
//                     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
//                     const frameData = canvas.toDataURL('image/jpeg');

//                     try {
//                         const blobData = dataURLToBlob(frameData);
//                         const formData = new FormData();
//                         formData.append('frame', blobData, 'frame.jpg');

//                         const response = await fetch('http://localhost:5001/predict', {
//                             method: 'POST',
//                             body: formData,
//                         });

//                         if (!response.ok) {
//                             throw new Error(`Server error: ${response.status}`);
//                         }
//                         const data = await response.json();
//                         setPrediction(data.prediction);
//                     } catch (error) {
//                         console.error('Error in prediction:', error);
//                         stopPrediction();
//                     }
//                 }
//             }
//         }, 1000 / 20);

//         setCaptureIntervalId(intervalId);
//     };

//     const dataURLToBlob = (dataURL) => {
//         const arr = dataURL.split(',');
//         const mime = arr[0].match(/:(.*?);/)[1];
//         const bstr = atob(arr[1]);
//         const n = bstr.length;
//         const u8arr = new Uint8Array(n);
//         for (let i = 0; i < n; i++) {
//             u8arr[i] = bstr.charCodeAt(i);
//         }
//         return new Blob([u8arr], { type: mime });
//     };

//     const stopPrediction = async () => {
//         setPrediction('');
//         if (captureIntervalId) {
//             clearInterval(captureIntervalId);
//             setCaptureIntervalId(null);
//         }

//         if (stream) {
//             const tracks = stream.getTracks();
//             tracks.forEach((track) => track.stop());
//             setStream(null);
//         }

//         if (videoRef.current) {
//             videoRef.current.srcObject = null;
//         }

//         try {
//             const response = await fetch('http://localhost:5001/stop-alarm', {
//                 method: 'POST',
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to stop the alarm');
//             }
//         } catch (error) {
//             console.error('Error stopping the alarm:', error);
//         }
//     };

//     const handleKeyPress = (event) => {
//         if (event.key === 'q') {
//             stopPrediction();
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('keypress', handleKeyPress);
//         return () => {
//             window.removeEventListener('keypress', handleKeyPress);
//         };
//     }, []);

//     return (
//         <div>
//             <video
//                 ref={videoRef}
//                 autoPlay
//                 muted
//                 style={{
//                     height: '33rem',
//                     width: '100%',
//                     border: '3px solid #3498db',
//                     borderRadius: '10px',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//                 }}
//             ></video>
//             <div style={{ marginTop: '20px' }}>
//                 <button
//                     onClick={startPrediction}
//                     style={{
//                         padding: '10px 20px',
//                         border: 'none',
//                         backgroundColor: '#2ecc71',
//                         color: 'white',
//                         borderRadius: '5px',
//                         marginRight: '10px',
//                         cursor: 'pointer',
//                         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//                     }}
//                 >
//                     Start Prediction
//                 </button>
//                 <button
//                     type="button"
//                     onClick={stopPrediction}
//                     style={{
//                         padding: '10px 20px',
//                         border: 'none',
//                         backgroundColor: '#e74c3c',
//                         color: 'white',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//                     }}
//                 >
//                     Stop
//                 </button>
//             </div>
//             {prediction && <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>Predicted Action: {prediction}</p>}
//         </div>
//     );
// };

// export default VideoPlayer;
