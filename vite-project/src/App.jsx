import React from 'react';
import { Navigate} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import FloatingShape from './components/FloatingShape.jsx'
import FrontPage from './front-page.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Watching from './Watching.jsx'; 
import Alerts from './Alerts.jsx';
import VideoWall from './VideoWall.jsx'; 
import FAQ from './FAQ.jsx'; 
import EmailVerificationPage from './EmailVerificationPage.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
import LoadingSpinner from './components/LoadingSpinner.jsx';
import VideoUpload from './VideoUpload.jsx';
import AddDevicePage from './AddDevicePage.jsx';



// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/watching' replace />;
	}

	return children;
};


function App() {

  const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

  return (
<div
  className=""
>
 



    
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
        } />
        <Route path="/signup" element={
          <RedirectAuthenticatedUser>
            <Signup />
          </RedirectAuthenticatedUser>
        } />
        <Route path="/watching" element={
          <ProtectedRoute>
            <Watching />
          </ProtectedRoute>
        } /> 
        <Route path="/alerts" element={<Alerts />} /> 
        <Route path="/video-wall" element={<VideoWall />} />
        <Route path="/video-detection" element={<VideoUpload />} />
        <Route path="/add-device" element={<AddDevicePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
    </Router>
    <Toaster />
    </div>
  );
} 
export default App; 


