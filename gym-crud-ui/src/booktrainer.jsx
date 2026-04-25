// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const BookTrainer = () => {
// //     const { id } = useParams();
// //     const navigate = useNavigate();
// //     const [trainers, setTrainers] = useState([]);
// //     const [slots, setSlots] = useState([]);
// //     const [formData, setFormData] = useState({ TrainerID: '', TimeSlotID: '' });

// //     useEffect(() => {
// //         axios.get('http://localhost:3000/api/trainers')
// //             .then(res => setTrainers(res.data))
// //             .catch(() => toast.error('Failed to load trainers'));

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
// //             await axios.post('http://localhost:3000/api/trainerbookings', {
// //                 UserID: parseInt(id),
// //                 TrainerID: parseInt(formData.TrainerID),
// //                 TimeSlotID: parseInt(formData.TimeSlotID),
// //                 BookingStatus: 'Pending'
// //             });
// //             toast.success("Trainer booked!");
// //             setTimeout(() => navigate(`/user/trainers/${id}`), 1500);
// //         } catch (err) {
// //             console.error(err);
// //             toast.error("Booking failed.");
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <ToastContainer />
// //             <h2 className="mb-4">Book New Trainer</h2>
// //             <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
// //                 <div className="mb-3">
// //                     <label className="form-label">Trainer</label>
// //                     <select className="form-select" name="TrainerID" onChange={handleChange} required>
// //                         <option value="">-- Select Trainer --</option>
// //                         {trainers.map(t => (
// //                             <option key={t.TrainerID} value={t.TrainerID}>
// //                                 {t.Name} ({t.Specialization})
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

// // export default BookTrainer;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BookTrainer = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [trainers, setTrainers] = useState([]);
//     const [slots, setSlots] = useState([]);
//     const [formData, setFormData] = useState({ TrainerID: '', TimeSlotID: '' });

//     useEffect(() => {
//         axios.get('http://localhost:3000/api/trainers')
//             .then(res => setTrainers(res.data))
//             .catch(() => toast.error('Failed to load trainers'));

//         axios.get('http://localhost:3000/api/timeslot')
//             .then(res => setSlots(res.data))
//             .catch(() => toast.error('Failed to load time slots'));
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:3000/api/trainerbookings', {
//                 UserID: parseInt(id),
//                 TrainerID: parseInt(formData.TrainerID),
//                 TimeSlotID: parseInt(formData.TimeSlotID),
//                 BookingStatus: 'Pending'
//             });
//             toast.success("Trainer booked!");
//             setTimeout(() => navigate(`/user/trainers/${id}`), 1500);
//         } catch (err) {
//             console.error(err);
//             toast.error("Booking failed.");
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
//             <h2 className="mb-4">Book New Trainer</h2>
//             <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
//                 <div className="mb-3">
//                     <label className="form-label">Trainer</label>
//                     <select className="form-select" name="TrainerID" onChange={handleChange} required>
//                         <option value="">-- Select Trainer --</option>
//                         {trainers.map(t => (
//                             <option key={t.TrainerID} value={t.TrainerID}>
//                                 {t.Name} ({t.Specialization})
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

// export default BookTrainer;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const BookTrainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trainers, setTrainers] = useState([]);
    const [slots, setSlots] = useState([]);
    const [formData, setFormData] = useState({ TrainerID: '', TimeSlotID: '' });

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

        axios.get('http://localhost:3000/api/trainers')
            .then(res => setTrainers(res.data))
            .catch(() => toast.error('Failed to load trainers'));

        axios.get('http://localhost:3000/api/timeslot')
            .then(res => setSlots(res.data))
            .catch(() => toast.error('Failed to load time slots'));
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/trainerbookings', {
                UserID: parseInt(id),
                TrainerID: parseInt(formData.TrainerID),
                TimeSlotID: parseInt(formData.TimeSlotID),
                BookingStatus: 'Pending'
            });
            toast.success("Trainer booked!");
            setTimeout(() => navigate(`/user/trainers/${id}`), 1500);
        } catch (err) {
            console.error(err);
            toast.error("Booking failed.");
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <button className="btn btn-outline-primary mb-4" onClick={() => navigate('/home')}>Go to Home</button>
            <h2 className="mb-4">Book New Trainer</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Trainer</label>
                    <select className="form-select" name="TrainerID" onChange={handleChange} required>
                        <option value="">-- Select Trainer --</option>
                        {trainers.map(t => (
                            <option key={t.TrainerID} value={t.TrainerID}>
                                {t.Name} ({t.Specialization})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Time Slot</label>
                    <select className="form-select" name="TimeSlotID" onChange={handleChange} required>
                        <option value="">-- Select Time Slot --</option>
                        {slots.map(s => (
                            <option key={s.TimeSlotID} value={s.TimeSlotID}>
                                {s.StartTime} - {s.EndTime}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookTrainer;
