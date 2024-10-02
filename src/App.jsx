import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BtechGuideAllotment from './pages/BtechGuideAllotment';
import BtechStudentAllotment from './pages/BtechStudentAllotment';
import BtechGradesSubmissions from './pages/BtechGradesSubmissions';
import MtechGuideAllotment from './pages/MtechGuideAllotment';
import MtechStudentAllotment from './pages/MtechStudentAllotment';
import MtechGradesSubmissions from './pages/MtechGradesSubmissions';
import Feedback from './pages/Feedback';
import LoginContainerBox from './components/LoginContainerBox';
import SignupBox from './components/SignupContainerBox';
import { useNavigate } from 'react-router-dom'; 

function App() {
    const [isLogin, setIsLogin] = useState(true);  
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    // const navigate = useNavigate(); 

    const handleSwitch = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = () => {
        setIsAuthenticated(true); 
        // navigate('/');
    };

    return (
        <Router>
            {!isAuthenticated ? (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "100vh",
                }}>
                    {isLogin ? (
                        <LoginContainerBox onSwitch={handleSwitch} onLogin={handleLogin} />
                    ) : (
                        <SignupBox onSwitch={handleSwitch} />
                    )}
                </div>
            ) : (
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/btech/guide-allotment" element={<BtechGuideAllotment />} />
                        <Route path="/btech/student-allotment" element={<BtechStudentAllotment />} />
                        <Route path="/btech/grades-submissions" element={<BtechGradesSubmissions />} />
                        <Route path="/mtech/guide-allotment" element={<MtechGuideAllotment />} />
                        <Route path="/mtech/student-allotment" element={<MtechStudentAllotment />} />
                        <Route path="/mtech/grades-submissions" element={<MtechGradesSubmissions />} />
                        <Route path="/feedback" element={<Feedback />} />
                    </Routes>
                    <Footer />
                </div>
            )}
        </Router>
    );
}

export default App;
