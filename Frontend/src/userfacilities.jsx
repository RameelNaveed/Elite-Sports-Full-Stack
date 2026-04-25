// // // import React, { useEffect, useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // const UserFacilities = () => {
// // //     const { id } = useParams();
// // //     const [facilities, setFacilities] = useState([]);
// // //     const navigate = useNavigate();

// // //     useEffect(() => {
// // //         axios.get(`http://localhost:3000/api/users/${id}/facilities`)
// // //             .then(res => setFacilities(res.data.facilities))
// // //             .catch(err => {
// // //                 console.error(err);
// // //                 toast.error("Failed to load booked facilities.");
// // //             });
// // //     }, [id]);

// // //     const handleCancel = async (facilityID) => {
// // //         try {
// // //             await axios.put(`http://localhost:3000/api/bookings/cancel/${facilityID}`);
// // //             toast.success("Booking cancelled!");
// // //             setFacilities(prev =>
// // //                 prev.map(f =>
// // //                     f.FacilityID === facilityID
// // //                         ? { ...f, BookingStatus: "Cancelled" }
// // //                         : f
// // //                 )
// // //             );
// // //         } catch (err) {
// // //             console.error("Cancellation error:", err);
// // //             toast.error("Failed to cancel booking.");
// // //         }
// // //     };

// // //     return (
// // //         <div className="container mt-5">
// // //             <ToastContainer />
// // //             <div className="d-flex justify-content-between align-items-center mb-4">
// // //                 <h2 className="fw-bold text-primary">Your Booked Facilities</h2>
// // //                 <button
// // //                     className="btn btn-outline-primary"
// // //                     onClick={() => navigate(`/user/book-facility/${id}`)}
// // //                 >
// // //                     + Book New Facility
// // //                 </button>
// // //             </div>

// // //             {facilities.length > 0 ? (
// // //                 <div className="row">
// // //                     {facilities.map(f => (
// // //                         <div key={f.FacilityID} className="col-md-4">
// // //                             <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
// // //                                 <div className="card-body">
// // //                                     <h5 className="card-title text-dark fw-semibold">{f.FacilityName}</h5>
// // //                                     <p className="mb-1"><strong>Time:</strong> {f.StartTime} - {f.EndTime}</p>
// // //                                     <p className="mb-2">
// // //                                         <strong>Status:</strong>{' '}
// // //                                         <span className={
// // //                                             f.BookingStatus === 'Pending' ? 'text-warning' :
// // //                                             f.BookingStatus === 'Availed' ? 'text-success' :
// // //                                             'text-danger'
// // //                                         }>
// // //                                             {f.BookingStatus}
// // //                                         </span>
// // //                                     </p>
// // //                                     <button
// // //                                         className="btn btn-sm btn-outline-danger"
// // //                                         onClick={() => handleCancel(f.FacilityID)}
// // //                                         disabled={f.BookingStatus !== 'Pending'}
// // //                                     >
// // //                                         Cancel Booking
// // //                                     </button>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             ) : (
// // //                 <div className="alert alert-info">No facilities booked.</div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default UserFacilities;

// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const UserFacilities = () => {
// //     const { id } = useParams();
// //     const [facilities, setFacilities] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         axios.get(`http://localhost:3000/api/users/${id}/facilities`)
// //             .then(res => setFacilities(res.data.facilities))
// //             .catch(err => {
// //                 console.error(err);
// //                 toast.error("Failed to load booked facilities.");
// //             });
// //     }, [id]);

// //     const handleCancel = async (facilityID) => {
// //         try {
// //             await axios.put(`http://localhost:3000/api/bookings/cancel/${facilityID}`);
// //             toast.success("Booking cancelled!");
// //             setFacilities(prev =>
// //                 prev.map(f =>
// //                     f.FacilityID === facilityID
// //                         ? { ...f, BookingStatus: "Cancelled" }
// //                         : f
// //                 )
// //             );
// //         } catch (err) {
// //             console.error("Cancellation error:", err);
// //             toast.error("Failed to cancel booking.");
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <ToastContainer />
// //             <div className="d-flex justify-content-between align-items-center mb-4">
// //                 <button
// //                     className="btn btn-outline-primary"
// //                     onClick={() => navigate('/home')}
// //                 >
// //                     Go to Home
// //                 </button>
// //             </div>
// //             <div className="d-flex justify-content-between align-items-center mb-4">
// //                 <h2 className="fw-bold text-primary">Your Booked Facilities</h2>
// //                 <button
// //                     className="btn btn-outline-primary"
// //                     onClick={() => navigate(`/user/book-facility/${id}`)}
// //                 >
// //                     + Book New Facility
// //                 </button>
// //             </div>

// //             {facilities.length > 0 ? (
// //                 <div className="row">
// //                     {facilities.map(f => (
// //                         <div key={f.FacilityID} className="col-md-4">
// //                             <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
// //                                 <div className="card-body">
// //                                     <h5 className="card-title text-dark fw-semibold">{f.FacilityName}</h5>
// //                                     <p className="mb-1"><strong>Time:</strong> {f.StartTime} - {f.EndTime}</p>
// //                                     <p className="mb-2">
// //                                         <strong>Status:</strong>{' '}
// //                                         <span className={
// //                                             f.BookingStatus === 'Pending' ? 'text-warning' :
// //                                             f.BookingStatus === 'Availed' ? 'text-success' :
// //                                             'text-danger'
// //                                         }>
// //                                             {f.BookingStatus}
// //                                         </span>
// //                                     </p>
// //                                     <button
// //                                         className="btn btn-sm btn-outline-danger"
// //                                         onClick={() => handleCancel(f.FacilityID)}
// //                                         disabled={f.BookingStatus !== 'Pending'}
// //                                     >
// //                                         Cancel Booking
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             ) : (
// //                 <div className="alert alert-info">No facilities booked.</div>
// //             )}
// //         </div>
// //     );
// // };

// // export default UserFacilities;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserFacilities = () => {
//     const { id } = useParams();
//     const [facilities, setFacilities] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             navigate('/login');
//             return;
//         }

//         try {
//             jwtDecode(token);
//         } catch (err) {
//             console.error('Token error', err);
//             localStorage.removeItem('authToken');
//             navigate('/login');
//             return;
//         }

//         axios.get(`http://localhost:3000/api/users/${id}/facilities`)
//             .then(res => setFacilities(res.data.facilities))
//             .catch(err => {
//                 console.error(err);
//                 toast.error("Failed to load booked facilities.");
//             });
//     }, [id, navigate]);

//     const handleCancel = async (facilityID) => {
//         try {
//             await axios.put(`http://localhost:3000/api/bookings/cancel/${facilityID}`);
//             toast.success("Booking cancelled!");
//             setFacilities(prev =>
//                 prev.map(f =>
//                     f.FacilityID === facilityID
//                         ? { ...f, BookingStatus: "Cancelled" }
//                         : f
//                 )
//             );
//         } catch (err) {
//             console.error("Cancellation error:", err);
//             toast.error("Failed to cancel booking.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <ToastContainer />
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <button className="btn btn-outline-primary" onClick={() => navigate('/home')}>
//                     Go to Home
//                 </button>
//                 <h2 className="fw-bold text-primary">Your Booked Facilities</h2>
//                 <button
//                     className="btn btn-outline-primary"
//                     onClick={() => navigate(`/user/book-facility/${id}`)}
//                 >
//                     + Book New Facility
//                 </button>
//             </div>

//             {facilities.length > 0 ? (
//                 <div className="row">
//                     {facilities.map(f => (
//                         <div key={f.FacilityID} className="col-md-4">
//                             <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
//                                 <div className="card-body">
//                                     <h5 className="card-title text-dark fw-semibold">{f.FacilityName}</h5>
//                                     <p className="mb-1"><strong>Time:</strong> {f.StartTime} - {f.EndTime}</p>
//                                     <p className="mb-2">
//                                         <strong>Status:</strong>{' '}
//                                         <span className={
//                                             f.BookingStatus === 'Pending' ? 'text-warning' :
//                                             f.BookingStatus === 'Availed' ? 'text-success' :
//                                             'text-danger'
//                                         }>
//                                             {f.BookingStatus}
//                                         </span>
//                                     </p>
//                                     <button
//                                         className="btn btn-sm btn-outline-danger"
//                                         onClick={() => handleCancel(f.FacilityID)}
//                                         disabled={f.BookingStatus !== 'Pending'}
//                                     >
//                                         Cancel Booking
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div className="alert alert-info">No facilities booked.</div>
//             )}
//         </div>
//     );
// };

// export default UserFacilities;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserFacilities = () => {
    const { id } = useParams();
    const [facilities, setFacilities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            jwtDecode(token);
        } catch (err) {
            console.error('Token error', err);
            localStorage.removeItem('authToken');
            navigate('/login');
            return;
        }

        axios.get(`http://localhost:3000/api/users/${id}/facilities`)
            .then(res => setFacilities(res.data.facilities))
            .catch(err => {
                console.error(err);
                toast.error("Failed to load booked facilities.");
            });
    }, [id, navigate]);

    const handleCancel = async (facilityID) => {
        try {
            await axios.put(`http://localhost:3000/api/bookings/cancel/${facilityID}`);
            toast.success("Booking cancelled!");
            setFacilities(prev =>
                prev.map(f =>
                    f.FacilityID === facilityID
                        ? { ...f, BookingStatus: "Cancelled" }
                        : f
                )
            );
        } catch (err) {
            console.error("Cancellation error:", err);
            toast.error("Failed to cancel booking.");
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button className="btn btn-outline-primary" onClick={() => navigate('/home')}>
                    Go to Home
                </button>
                <h2 className="fw-bold text-primary">Your Booked Facilities</h2>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate(`/user/book-facility/${id}`)}
                >
                    + Book New Facility
                </button>
            </div>

            {facilities.length > 0 ? (
                <div className="row">
                    {facilities.map(f => (
                        <div key={f.FacilityID} className="col-md-4">
                            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                                <div className="card-body">
                                    <h5 className="card-title text-dark fw-semibold">{f.FacilityName}</h5>
                                    <p className="mb-1"><strong>Time:</strong> {f.StartTime} - {f.EndTime}</p>
                                    <p className="mb-1">
                                        <strong>Booking Date:</strong> {f.BookingDate ? new Date(f.BookingDate).toLocaleDateString() : 'Not Provided'}
                                    </p> {/* ✅ Fixed */}
                                    <p className="mb-2">
                                        <strong>Status:</strong>{' '}
                                        <span className={
                                            f.BookingStatus === 'Pending' ? 'text-warning' :
                                            f.BookingStatus === 'Availed' ? 'text-success' :
                                            'text-danger'
                                        }>
                                            {f.BookingStatus}
                                        </span>
                                    </p>
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => handleCancel(f.FacilityID)}
                                        disabled={f.BookingStatus !== 'Pending'}
                                    >
                                        Cancel Booking
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-info">No facilities booked.</div>
            )}
        </div>
    );
};

export default UserFacilities;
