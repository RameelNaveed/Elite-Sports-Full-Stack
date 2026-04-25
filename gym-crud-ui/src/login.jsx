// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import eliteLogo from './elite_logo.png';
// import stadiumBackground from './stadium.jpg';
// import './LoginStyles.css'; // 🔥 New CSS for animation and hover effects

// const Login = () => {
//     const [credentials, setCredentials] = useState({ Username: '', UserPassword: '' });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/api/users/login', credentials);
//             const { token } = response.data;

//             localStorage.setItem('authToken', token);
//             toast.success('Login successful!');
//             setTimeout(() => navigate('/home'), 1000);
//         } catch (error) {
//             console.error('Login Error:', error.response?.data || error.message);
//             toast.error('Invalid credentials. Please try again.');
//         }
//     };

//     return (
//         <div
//             className="min-vh-100 d-flex flex-column align-items-center justify-content-center"
//             style={{
//                 backgroundImage: `url(${stadiumBackground})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//             }}
//         >
//             <div className="fade-in text-center mb-4">
//                 <img
//                     src={eliteLogo}
//                     alt="Elite Sports Logo"
//                     className="fade-in"
//                     style={{ width: '250px', height: 'auto', marginBottom: '10px' }}
//                 />
//                 <h1
//                     className="fade-in"
//                     style={{
//                         fontFamily: 'Georgia, serif',
//                         fontWeight: 'bold',
//                         fontSize: '3rem',
//                         color: '#ffffff',
//                         textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
//                     }}
//                 >
//                     Elite Sports
//                 </h1>
//             </div>

//             <div
//                 className="fade-in card p-4 w-100"
//                 style={{
//                     maxWidth: '400px',
//                     backgroundColor: 'rgba(255, 255, 255, 0.85)',
//                     borderRadius: '15px',
//                     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
//                 }}
//             >
//                 <h2 className="text-center mb-4">Login</h2>
//                 <ToastContainer />
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-3">
//                         <label className="form-label">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="Username"
//                             value={credentials.Username}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             name="UserPassword"
//                             value={credentials.UserPassword}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100 glow-button">
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // 🔥 Added Link
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eliteLogo from './elite_logo.png';
import stadiumBackground from './stadium.jpg';
import './LoginStyles.css'; // 🔥 New CSS for animation and hover effects

const Login = () => {
    const [credentials, setCredentials] = useState({ Username: '', UserPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', credentials);
            const { token } = response.data;

            localStorage.setItem('authToken', token);
            toast.success('Login successful!');
            setTimeout(() => navigate('/home'), 1000);
        } catch (error) {
            console.error('Login Error:', error.response?.data || error.message);
            toast.error('Invalid credentials. Please try again.');
        }
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${stadiumBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="fade-in text-center mb-4">
                <img
                    src={eliteLogo}
                    alt="Elite Sports Logo"
                    className="fade-in"
                    style={{ width: '250px', height: 'auto', marginBottom: '10px' }}
                />
                <h1
                    className="fade-in"
                    style={{
                        fontFamily: 'Georgia, serif',
                        fontWeight: 'bold',
                        fontSize: '3rem',
                        color: '#ffffff',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    }}
                >
                    Elite Sports
                </h1>
            </div>

            <div
                className="fade-in card p-4 w-100"
                style={{
                    maxWidth: '400px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                }}
            >
                <h2 className="text-center mb-4">Login</h2>
                <ToastContainer />
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="Username"
                            value={credentials.Username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="UserPassword"
                            value={credentials.UserPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 glow-button mb-3">
                        Login
                    </button>
                </form>

                {/* 🔥 New Register Link */}
                <div className="text-center mt-2">
                    <small>Don't have an account? </small>
                    <Link to="/user/register" className="text-primary fw-bold" style={{ textDecoration: 'none' }}>
                         Register here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

