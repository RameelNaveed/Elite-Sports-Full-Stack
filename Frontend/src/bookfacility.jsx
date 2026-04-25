// // // import React, { useEffect, useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { toast, ToastContainer } from 'react-toastify';

// // // const BookFacility = () => {
// // //     const { id } = useParams();
// // //     const navigate = useNavigate();
// // //     const [facilities, setFacilities] = useState([]);
// // //     const [slots, setSlots] = useState([]);
// // //     const [formData, setFormData] = useState({ FacilityID: '', TimeSlotID: '' });

// // //     useEffect(() => {
// // //         axios.get('http://localhost:3000/api/facilities')
// // //             .then(res => setFacilities(res.data))
// // //             .catch(() => toast.error('Failed to load facilities'));

// // //         axios.get('http://localhost:3000/api/timeslot')
// // //             .then(res => setSlots(res.data))
// // //             .catch(() => toast.error('Failed to load time slots'));
// // //     }, []);

// // //     const handleChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             await axios.post('http://localhost:3000/api/bookings', {
// // //                 UserID: parseInt(id),
// // //                 FacilityID: parseInt(formData.FacilityID),
// // //                 TimeSlotID: parseInt(formData.TimeSlotID),
// // //                 BookingStatus: 'Pending'
// // //             });
// // //             toast.success("Facility booked!");
// // //             setTimeout(() => navigate(`/user/facilities/${id}`), 1500);
// // //         } catch (err) {
// // //             console.error(err);
// // //             toast.error("Booking failed.");
// // //         }
// // //     };

// // //     return (
// // //         <div className="container mt-5">
// // //             <ToastContainer />
// // //             <h2 className="mb-4">Book New Facility</h2>
// // //             <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
// // //                 <div className="mb-3">
// // //                     <label className="form-label">Facility</label>
// // //                     <select className="form-select" name="FacilityID" onChange={handleChange} required>
// // //                         <option value="">-- Select Facility --</option>
// // //                         {facilities.map(f => (
// // //                             <option key={f.FacilityID} value={f.FacilityID}>
// // //                                 {f.FacilityName} ({f.FacilityType})
// // //                             </option>
// // //                         ))}
// // //                     </select>
// // //                 </div>

// // //                 <div className="mb-3">
// // //                     <label className="form-label">Time Slot</label>
// // //                     <select className="form-select" name="TimeSlotID" onChange={handleChange} required>
// // //                         <option value="">-- Select Time Slot --</option>
// // //                         {slots.map(s => (
// // //                             <option key={s.TimeSlotID} value={s.TimeSlotID}>
// // //                                 {s.StartTime} - {s.EndTime}
// // //                             </option>
// // //                         ))}
// // //                     </select>
// // //                 </div>

// // //                 <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default BookFacility;

// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';

// // const BookFacility = () => {
// //     const { id } = useParams();
// //     const navigate = useNavigate();
// //     const [facilities, setFacilities] = useState([]);
// //     const [slots, setSlots] = useState([]);
// //     const [formData, setFormData] = useState({ FacilityID: '', TimeSlotID: '' });

// //     useEffect(() => {
// //         axios.get('http://localhost:3000/api/facilities')
// //             .then(res => setFacilities(res.data))
// //             .catch(() => toast.error('Failed to load facilities'));

// //         axios.get('http://localhost:3000/api/timeslot')
// //             .then(res => setSlots(res.data))
// //             .catch(() => toast.error('Failed to load time slots'));
// //     }, []);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('http://localhost:3000/api/bookings', {
// //                 UserID: parseInt(id),
// //                 FacilityID: parseInt(formData.FacilityID),
// //                 TimeSlotID: parseInt(formData.TimeSlotID),
// //                 BookingStatus: 'Pending'
// //             });
// //             toast.success("Facility booked!");
// //             setTimeout(() => navigate(`/user/facilities/${id}`), 1500);
// //         } catch (err) {
// //             console.error(err);
// //             toast.error("Booking failed.");
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
// //             <h2 className="mb-4">Book New Facility</h2>
// //             <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
// //                 <div className="mb-3">
// //                     <label className="form-label">Facility</label>
// //                     <select className="form-select" name="FacilityID" onChange={handleChange} required>
// //                         <option value="">-- Select Facility --</option>
// //                         {facilities.map(f => (
// //                             <option key={f.FacilityID} value={f.FacilityID}>
// //                                 {f.FacilityName} ({f.FacilityType})
// //                             </option>
// //                         ))}
// //                     </select>
// //                 </div>

// //                 <div className="mb-3">
// //                     <label className="form-label">Time Slot</label>
// //                     <select className="form-select" name="TimeSlotID" onChange={handleChange} required>
// //                         <option value="">-- Select Time Slot --</option>
// //                         {slots.map(s => (
// //                             <option key={s.TimeSlotID} value={s.TimeSlotID}>
// //                                 {s.StartTime} - {s.EndTime}
// //                             </option>
// //                         ))}
// //                     </select>
// //                 </div>

// //                 <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default BookFacility;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';

// const BookFacility = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [facilities, setFacilities] = useState([]);
//     const [slots, setSlots] = useState([]);
//     const [formData, setFormData] = useState({ FacilityID: '', TimeSlotID: '' });

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

//         axios.get('http://localhost:3000/api/facilities')
//             .then(res => setFacilities(res.data))
//             .catch(() => toast.error('Failed to load facilities'));

//         axios.get('http://localhost:3000/api/timeslot')
//             .then(res => setSlots(res.data))
//             .catch(() => toast.error('Failed to load time slots'));
//     }, [navigate]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:3000/api/bookings', {
//                 UserID: parseInt(id),
//                 FacilityID: parseInt(formData.FacilityID),
//                 TimeSlotID: parseInt(formData.TimeSlotID),
//                 BookingStatus: 'Pending'
//             });
//             toast.success("Facility booked!");
//             setTimeout(() => navigate(`/user/facilities/${id}`), 1500);
//         } catch (err) {
//             console.error(err);
//             toast.error("Booking failed.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <ToastContainer />
//             <button className="btn btn-outline-primary mb-4" onClick={() => navigate('/home')}>Go to Home</button>
//             <h2 className="mb-4">Book New Facility</h2>
//             <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
//                 <div className="mb-3">
//                     <label className="form-label">Facility</label>
//                     <select className="form-select" name="FacilityID" onChange={handleChange} required>
//                         <option value="">-- Select Facility --</option>
//                         {facilities.map(f => (
//                             <option key={f.FacilityID} value={f.FacilityID}>
//                                 {f.FacilityName} ({f.FacilityType})
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Time Slot</label>
//                     <select className="form-select" name="TimeSlotID" onChange={handleChange} required>
//                         <option value="">-- Select Time Slot --</option>
//                         {slots.map(s => (
//                             <option key={s.TimeSlotID} value={s.TimeSlotID}>
//                                 {s.StartTime} - {s.EndTime}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
//             </form>
//         </div>
//     );
// };

// export default BookFacility;

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const BookFacility = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [facilities, setFacilities] = useState([]);
    const [allSlots, setAllSlots] = useState([]);
    const [slots, setSlots] = useState([]);
    const [formData, setFormData] = useState({
        FacilityID: '',
        TimeSlotID: '',
        BookingDate: '',
    });

    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

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

        axios.get('http://localhost:3000/api/facilities')
            .then(res => setFacilities(res.data))
            .catch(() => toast.error('Failed to load facilities'));

        axios.get('http://localhost:3000/api/timeslot')
            .then(res => setAllSlots(res.data))
            .catch(() => toast.error('Failed to load time slots'));
    }, [navigate]);

    const filterSlots = useCallback(() => {
        if (allSlots.length === 0) {
            setSlots([]);
            return;
        }

        const selectedDate = formData.BookingDate || today;
        let filtered = [...allSlots];

        if (selectedDate === today) {
            const now = new Date();
            const currentMinutes = now.getHours() * 60 + now.getMinutes();

            filtered = filtered.filter(slot => {
                const [startHour, startMinute] = slot.StartTime.split(':').map(Number);
                const slotStartMinutes = startHour * 60 + startMinute;
                return slotStartMinutes > currentMinutes;
            });
        }

        setSlots(filtered);
    }, [allSlots, formData.BookingDate, today]);

    useEffect(() => {
        filterSlots();
    }, [filterSlots]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingDate = formData.BookingDate || today;

        try {
            await axios.post('http://localhost:3000/api/bookings', {
                UserID: parseInt(id),
                FacilityID: parseInt(formData.FacilityID),
                TimeSlotID: parseInt(formData.TimeSlotID),
                BookingStatus: 'Pending',
                BookingDate: bookingDate,
            });
            toast.success("Facility booked!");
            setTimeout(() => navigate(`/user/facilities/${id}`), 1500);
        } catch (err) {
            console.error(err);
            toast.error("Booking failed.");
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <button className="btn btn-outline-primary mb-4" onClick={() => navigate('/home')}>
                Go to Home
            </button>
            <h2 className="mb-4">Book New Facility</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

                <div className="mb-3">
                    <label className="form-label">Facility</label>
                    <select
                        className="form-select"
                        name="FacilityID"
                        value={formData.FacilityID}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Select Facility --</option>
                        {facilities.map(f => (
                            <option key={f.FacilityID} value={f.FacilityID}>
                                {f.FacilityName} ({f.FacilityType})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Time Slot</label>
                    <select
                        className="form-select"
                        name="TimeSlotID"
                        value={formData.TimeSlotID}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Select Time Slot --</option>
                        {slots.length > 0 ? (
                            slots.map(s => (
                                <option key={s.TimeSlotID} value={s.TimeSlotID}>
                                    {s.StartTime} - {s.EndTime}
                                </option>
                            ))
                        ) : (
                            <option value="">No available slots</option>
                        )}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Booking Date (today or future only)</label>
                    <input
                        type="date"
                        className="form-control"
                        name="BookingDate"
                        value={formData.BookingDate}
                        onChange={handleChange}
                        min={today}
                    />
                    <small className="text-muted">You can only select today or a future date.</small>
                </div>

                <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookFacility;
