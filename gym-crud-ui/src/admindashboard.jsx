// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const AdminDashboard = () => {
// //     return (
// //         <div className="container py-5">
// //             <h2 className="mb-4 text-center">Admin Dashboard</h2>

// //             <div className="row g-4">
// //                 <div className="col-md-4">
// //                     <div className="card h-100 shadow-sm text-center">
// //                         <div className="card-body d-flex flex-column justify-content-center">
// //                             <h5 className="card-title">Users</h5>
// //                             <Link to="/admin/users" className="btn btn-primary mt-3">Manage Users</Link>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="col-md-4">
// //                     <div className="card h-100 shadow-sm text-center">
// //                         <div className="card-body d-flex flex-column justify-content-center">
// //                             <h5 className="card-title">Payments</h5>
// //                             <Link to="/admin/payment" className="btn btn-primary mt-3">Manage Payments</Link>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="col-md-4">
// //                     <div className="card h-100 shadow-sm text-center">
// //                         <div className="card-body d-flex flex-column justify-content-center">
// //                             <h5 className="card-title">Facilities</h5>
// //                             <Link to="/admin/facilities" className="btn btn-primary mt-3">Manage Facilities</Link>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="col-md-4">
// //                     <div className="card h-100 shadow-sm text-center">
// //                         <div className="card-body d-flex flex-column justify-content-center">
// //                             <h5 className="card-title">Trainers</h5>
// //                             <Link to="/admin/trainers" className="btn btn-primary mt-3">Manage Trainers</Link>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="col-md-4">
// //                     <div className="card h-100 shadow-sm text-center">
// //                         <div className="card-body d-flex flex-column justify-content-center">
// //                             <h5 className="card-title">Time Slots</h5>
// //                             <Link to="/admin/timeslots" className="btn btn-primary mt-3">Manage Time Slots</Link>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="col-md-4">
// //                     <div className="card h-100 shadow-sm text-center">
// //                         <div className="card-body d-flex flex-column justify-content-center">
// //                             <h5 className="card-title">Feedback</h5>
// //                             <Link to="/admin/feedback" className="btn btn-primary mt-3">View Feedback</Link>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AdminDashboard;

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const AdminDashboard = () => {
// //     const cards = [
// //         { title: 'Users', link: '/admin/users', image: 'https://cdn-icons-png.flaticon.com/512/747/747376.png', alt: 'Users' },
// //         { title: 'Payments', link: '/admin/payment', image: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png', alt: 'Payments' },
// //         { title: 'Facilities', link: '/admin/facilities', image: 'https://cdn-icons-png.flaticon.com/512/3063/3063827.png', alt: 'Facilities' },
// //         { title: 'Trainers', link: '/admin/trainers', image: 'https://cdn-icons-png.flaticon.com/512/2944/2944577.png', alt: 'Trainers' },
// //         { title: 'Time Slots', link: '/admin/timeslots', image: 'https://cdn-icons-png.flaticon.com/512/747/747310.png', alt: 'Time Slots' },
// //         { title: 'Feedback', link: '/admin/feedback', image: 'https://cdn-icons-png.flaticon.com/512/809/809957.png', alt: 'Feedback' }
// //     ];

// //     return (
// //         <div className="container py-5">
// //             <h2 className="mb-5 text-center">Admin Dashboard</h2>

// //             <div className="row g-4">
// //                 {cards.map((card, index) => (
// //                     <div className="col-md-4" key={index}>
// //                         <div className="card h-100 shadow-sm text-center border-0">
// //                             <img src={card.image} alt={card.alt} className="card-img-top p-3" style={{ height: '180px', objectFit: 'contain' }} />
// //                             <div className="card-body d-flex flex-column justify-content-between">
// //                                 <h5 className="card-title mb-3">{card.title}</h5>
// //                                 <Link to={card.link} className="btn btn-outline-primary">Manage {card.title}</Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default AdminDashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const cards = [
        { title: 'Users', link: '/admin/users', image: 'https://cdn-icons-png.flaticon.com/512/747/747376.png', alt: 'Users', bgColor: 'bg-primary' },
        { title: 'Payments', link: '/admin/payment', image: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png', alt: 'Payments', bgColor: 'bg-success' },
        { title: 'Facilities', link: '/admin/facilities', image: 'https://cdn-icons-png.flaticon.com/512/3063/3063827.png', alt: 'Facilities', bgColor: 'bg-warning' },
        { title: 'Trainers', link: '/admin/trainers', image: 'https://cdn-icons-png.flaticon.com/512/2944/2944577.png', alt: 'Trainers', bgColor: 'bg-info' },
        { title: 'Time Slots', link: '/admin/timeslots', image: 'https://cdn-icons-png.flaticon.com/512/747/747310.png', alt: 'Time Slots', bgColor: 'bg-danger' },
        { title: 'Feedback', link: '/admin/feedback', image: 'https://cdn-icons-png.flaticon.com/512/809/809957.png', alt: 'Feedback', bgColor: 'bg-secondary' }
    ];

    return (
        <div className="container py-5">
            <h2 className="mb-5 text-center">Admin Dashboard</h2>

            <div className="row g-4">
                {cards.map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <div className={`card h-100 shadow-sm text-center border-0 ${card.bgColor}`} style={{ transition: 'transform 0.3s', borderRadius: '15px' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src={card.image} alt={card.alt} className="card-img-top p-3" style={{ height: '180px', objectFit: 'contain' }} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title text-white mb-3">{card.title}</h5>
                                <Link to={card.link} className="btn btn-light mt-auto">Manage {card.title}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
// import LogoWatermark from './logowatermark.jsx';
// import React from 'react';
// import { Link } from 'react-router-dom';
// //import LogoWatermark from '../components/logowatermark.jsx'; // Adjust the path if needed

// const AdminDashboard = () => {
//     const cards = [
//         { title: 'Users', link: '/admin/users', image: 'https://cdn-icons-png.flaticon.com/512/747/747376.png', alt: 'Users', bgColor: 'bg-primary' },
//         { title: 'Payments', link: '/admin/payment', image: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png', alt: 'Payments', bgColor: 'bg-success' },
//         { title: 'Facilities', link: '/admin/facilities', image: 'https://cdn-icons-png.flaticon.com/512/3063/3063827.png', alt: 'Facilities', bgColor: 'bg-warning' },
//         { title: 'Trainers', link: '/admin/trainers', image: 'https://cdn-icons-png.flaticon.com/512/2944/2944577.png', alt: 'Trainers', bgColor: 'bg-info' },
//         { title: 'Time Slots', link: '/admin/timeslots', image: 'https://cdn-icons-png.flaticon.com/512/747/747310.png', alt: 'Time Slots', bgColor: 'bg-danger' },
//         { title: 'Feedback', link: '/admin/feedback', image: 'https://cdn-icons-png.flaticon.com/512/809/809957.png', alt: 'Feedback', bgColor: 'bg-secondary' }
//     ];

//     return (
//         <div className="relative min-h-screen">
//             <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//                 <LogoWatermark />
//             </div>

//             <div className="relative z-10 container py-5">
//                 <h2 className="mb-5 text-center">Admin Dashboard</h2>

//                 <div className="row g-4">
//                     {cards.map((card, index) => (
//                         <div className="col-md-4" key={index}>
//                             <div className={`card h-100 shadow-sm text-center border-0 ${card.bgColor}`} style={{ transition: 'transform 0.3s', borderRadius: '15px' }}
//                                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//                                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
//                                 <img src={card.image} alt={card.alt} className="card-img-top p-3" style={{ height: '180px', objectFit: 'contain' }} />
//                                 <div className="card-body d-flex flex-column justify-content-between">
//                                     <h5 className="card-title text-white mb-3">{card.title}</h5>
//                                     <Link to={card.link} className="btn btn-light mt-auto">Manage {card.title}</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;
