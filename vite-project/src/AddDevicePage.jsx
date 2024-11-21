// import React, { useState } from 'react';
// import './AddDevicePage.css'; // Bringing in the swag with some styles

// const AddDevicePage = () => {
//     const [deviceType, setDeviceType] = useState('');  // What device you wanna add?
//     const [deviceName, setDeviceName] = useState('');  // Name it, bro!
//     const [successMessage, setSuccessMessage] = useState('');  // Flex that success

//     const handleDeviceTypeChange = (type) => {
//         setDeviceType(type);
//         setSuccessMessage('');  // Clear the flex message
//     };

//     const handleAddDevice = () => {
//         if (!deviceType || !deviceName) {
//             alert('Yo, pick a device and give it a name!');
//             return;
//         }

//         // Fake it till you make it (could be an API call, but nah)
//         setSuccessMessage(`Boom! ${deviceType} - ${deviceName} added.`);
//         setDeviceName('');  // Clear the name field
//     };

//     return (
//         <div className="addDevicePage">
//             <div className="container">
//                 <h1 className="title">Add Your Device</h1>

//                 <div className="device-options">
//                     <div
//                         className={`device ${deviceType === 'Camera' ? 'selected-device' : ''}`}
//                         onClick={() => handleDeviceTypeChange('Camera')}
//                     >
//                         <i className="fa fa-video-camera icon"></i>
//                         <p>Camera</p>
//                     </div>

//                     <div
//                         className={`device ${deviceType === 'Flash Drive' ? 'selected-device' : ''}`}
//                         onClick={() => handleDeviceTypeChange('Flash Drive')}
//                     >
//                         <i className="fa fa-usb icon"></i>
//                         <p>Flash Drive</p>
//                     </div>
//                 </div>

//                 {deviceType && (
//                     <div className="form">
//                         <input
//                             type="text"
//                             placeholder={`Name your ${deviceType}`}
//                             value={deviceName}
//                             onChange={(e) => setDeviceName(e.target.value)}
//                             className="input"
//                         />
//                         <button onClick={handleAddDevice} className="add-button">
//                             Add {deviceType}
//                         </button>
//                     </div>
//                 )}

//                 {successMessage && <p className="success-message">{successMessage}</p>}

//                 <div className="instructions">
//                     <h2>Instructions:</h2>
//                     <p>1. Select the type of device you want to add by clicking on the Camera or Flash Drive option.</p>
//                     <p>2. Enter a unique name for the device in the input field.</p>
//                     <p>3. Click the "Add Device" button to add the device to the system.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddDevicePage;








































import React, { useState } from 'react';
import './AddDevicePage.css';

const AddDevicePage = () => {
    const [deviceType, setDeviceType] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [cameraIP, setCameraIP] = useState('');
    const [cameraPort, setCameraPort] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleDeviceTypeChange = (type) => {
        setDeviceType(type);
        setSuccessMessage('');
    };

    const handleAddDevice = () => {
        if (!deviceType || !deviceName) {
            alert('Please select a device type and provide the necessary details.');
            return;
        }

        if (deviceType === 'Camera' && (!cameraIP || !cameraPort)) {
            alert('Please enter the IP address and port for the camera.');
            return;
        }

        setSuccessMessage(`Successfully added ${deviceType} - ${deviceName}`);
        setDeviceName('');
        setCameraIP('');
        setCameraPort('');
    };

    return (
        <div className="addDevicePage">
            <div className="container">
                <h1 className="title">Add Your Device</h1>

                <div className="device-options">
                    <div
                        className={`device ${deviceType === 'Camera' ? 'selected-device' : ''}`}
                        onClick={() => handleDeviceTypeChange('Camera')}
                    >
                        <i className="fa fa-video-camera icon"></i>
                        <p>Camera</p>
                    </div>

                    {/* <div
                        className={`device ${deviceType === 'Flash Drive' ? 'selected-device' : ''}`}
                        onClick={() => handleDeviceTypeChange('Flash Drive')}
                    >
                        <i className="fa fa-usb icon"></i>
                        <p>Flash Drive</p>
                    </div> */}
                </div>

                {deviceType && (
                    <div className="form">
                        <input
                            type="text"
                            placeholder={`Name your ${deviceType}`}
                            value={deviceName}
                            onChange={(e) => setDeviceName(e.target.value)}
                            className="input"
                        />
                        {deviceType === 'Camera' && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter Camera IP Address"
                                    value={cameraIP}
                                    onChange={(e) => setCameraIP(e.target.value)}
                                    className="input"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Camera Port"
                                    value={cameraPort}
                                    onChange={(e) => setCameraPort(e.target.value)}
                                    className="input"
                                />
                            </>
                        )}
                        <button onClick={handleAddDevice} className="add-button">
                            Add {deviceType}
                        </button>
                    </div>
                )}

                {successMessage && <p className="success-message">{successMessage}</p>}

                <div className="instructions">
                    <h2>Instructions:</h2>
                    <ul>
                        <li>Select the type of device you want to add by clicking on the Camera or Flash Drive option.</li>
                        <li>Enter a unique name for the device in the input field.</li>
                        {deviceType === 'Camera' && (
                            <>
                                <li>Enter the IP address and port for the camera.</li>
                                <li>Ensure that the camera is connected to the network and accessible via the provided IP and port.</li>
                            </>
                        )}
                        <li>Click the "Add Device" button to add the device to the system.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddDevicePage;
