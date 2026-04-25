// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';

// const UserProfile = () => {
//     const { id } = useParams();
//     const [user, setUser] = useState({});
//     const [editing, setEditing] = useState(false);

//     useEffect(() => {
//         axios.get(`http://localhost:3000/api/users/${id}`)
//             .then(res => setUser(res.data))
//             .catch(err => {
//                 console.error(err);
//                 toast.error("Failed to load profile.");
//             });
//     }, [id]);

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setUser(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSave = async () => {
//         try {
//             await axios.put(`http://localhost:3000/api/users/${id}`, user);
//             toast.success("Profile updated");
//             setEditing(false);
//         } catch (err) {
//             console.error(err);
//             toast.error("Failed to update profile.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <ToastContainer />
//             <h2>User Profile</h2>
//             <div className="card p-4 shadow-sm">
//                 <div className="mb-3">
//                     <label className="form-label">Username</label>
//                     <input disabled={!editing} name="Username" value={user.Username || ''} className="form-control" onChange={handleChange} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input disabled={!editing} name="Email" value={user.Email || ''} className="form-control" onChange={handleChange} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Phone Number</label>
//                     <input disabled={!editing} name="PhoneNumber" value={user.PhoneNumber || ''} className="form-control" onChange={handleChange} />
//                 </div>
//                 <div className="d-flex gap-2">
//                     {!editing ? (
//                         <button className="btn btn-primary" onClick={() => setEditing(true)}>Edit</button>
//                     ) : (
//                         <>
//                             <button className="btn btn-success" onClick={handleSave}>Save</button>
//                             <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserProfile = () => {
//     const { id } = useParams();
//     const [user, setUser] = useState({});
//     const [updatedUser, setUpdatedUser] = useState({
//         name: '',
//         email: ''
//     });
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:3000/api/users/${id}`)
//             .then(res => {
//                 setUser(res.data);
//                 setUpdatedUser({ name: res.data.Name, email: res.data.Email });
//             })
//             .catch(err => {
//                 console.error(err);
//                 toast.error("Failed to load user profile.");
//             });
//     }, [id]);

//     const handleChange = (e) => {
//         setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
//     };

//     const handleUpdateProfile = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:3000/api/users/${id}`, updatedUser);
//             toast.success("Profile updated successfully!");
//         } catch (err) {
//             console.error(err);
//             toast.error("Failed to update profile.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <ToastContainer />
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <button
//                     className="btn btn-outline-primary"
//                     onClick={() => navigate('/home')}
//                 >
//                     Go to Home
//                 </button>
//             </div>
//             <h2 className="mb-4">User Profile</h2>
//             <div className="card p-4 shadow-sm">
//                 <form onSubmit={handleUpdateProfile}>
//                     <div className="mb-3">
//                         <label className="form-label">Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="name"
//                             value={updatedUser.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             name="email"
//                             value={updatedUser.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-success w-100">Update Profile</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const UserProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            jwtDecode(token); // Validate token
        } catch (err) {
            console.error('Token error', err);
            localStorage.removeItem('authToken');
            navigate('/login');
            return;
        }

        axios.get(`http://localhost:3000/api/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => {
                console.error(err);
                toast.error("Failed to load profile.");
            });
    }, [id, navigate]);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3000/api/users/${id}`, user);
            toast.success("Profile updated");
            setEditing(false);
        } catch (err) {
            console.error(err);
            toast.error("Failed to update profile.");
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <h2>User Profile</h2>
            <div className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input disabled={!editing} name="Username" value={user.Username || ''} className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input disabled={!editing} name="Email" value={user.Email || ''} className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input disabled={!editing} name="PhoneNumber" value={user.PhoneNumber || ''} className="form-control" onChange={handleChange} />
                </div>
                <div className="d-flex gap-2">
                    {!editing ? (
                        <button className="btn btn-primary" onClick={() => setEditing(true)}>Edit</button>
                    ) : (
                        <>
                            <button className="btn btn-success" onClick={handleSave}>Save</button>
                            <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
                        </>
                    )}
                </div>
            </div>

            {/* Home button at the bottom */}
            <div className="text-center mt-4">
                <button className="btn btn-outline-primary" onClick={() => navigate('/home')}>
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default UserProfile;

