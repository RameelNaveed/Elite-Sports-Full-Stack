// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const UserPayment = () => {
// //     const { id } = useParams();
// //     const navigate = useNavigate();
// //     const [payments, setPayments] = useState([]);

// //     useEffect(() => {
// //         axios.get(`http://localhost:3000/api/users/${id}/payments`)
// //             .then(res => setPayments(res.data))
// //             .catch(err => {
// //                 console.error(err);
// //                 toast.error("Failed to load payment data.");
// //             });
// //     }, [id]);

// //     return (
// //         <div className="container mt-5">
// //             <ToastContainer />
// //             <div className="d-flex justify-content-between align-items-center mb-4">
// //                 <h2 className="fw-bold text-success">Your Payments</h2>
// //                 <button
// //                     className="btn btn-outline-secondary"
// //                     onClick={() => navigate(`/home`)}
// //                 >
// //                     ⬅ Back to Home
// //                 </button>
// //             </div>

// //             {payments.length > 0 ? (
// //                 <div className="table-responsive">
// //                     <table className="table table-bordered table-hover">
// //                         <thead className="table-light">
// //                             <tr>
// //                                 <th>Payment ID</th>
// //                                 <th>Amount</th>
// //                                 <th>Date</th>
// //                                 <th>Type</th>
// //                                 <th>Status</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {payments.map(p => (
// //                                 <tr key={p.PaymentID}>
// //                                     <td>{p.PaymentID}</td>
// //                                     <td>Rs. {p.Amount}</td>
// //                                     <td>{p.PaymentDate}</td>
// //                                     <td>{p.PaymentType}</td>
// //                                     <td className={p.PaymentStatus === 'Successful' ? 'text-success' : 'text-warning'}>
// //                                         {p.PaymentStatus}
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             ) : (
// //                 <div className="alert alert-info">No payments found.</div>
// //             )}
// //         </div>
// //     );
// // };

// // export default UserPayment;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserPayment = () => {
    const { id } = useParams();
    const [payments, setPayments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPayments();
    }, [id]);

    const fetchPayments = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/users/${id}/payments`);
            setPayments(res.data.payments);
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch payments.");
        }
    };

    const handlePayment = async (paymentId) => {
        const method = window.prompt("Enter payment method (Card, Cash, or Bank Transfer):", "Card");
        if (!method || (method !== 'Card' && method !== 'Cash' && method !== 'Bank Transfer')) {
            toast.error("Invalid payment method.");
            return;
        }

        try {
            await axios.put(`http://localhost:3000/api/payments/${paymentId}`, {
                PaymentStatusID: 4, // Assuming 1 = Successful
                PaymentType: method,
                //Amount: payment.Amount
            });
            toast.success("Payment marked as successful!");
            fetchPayments();
        } catch (err) {
            console.error("Payment error:", err);
            toast.error("Payment failed.");
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-primary">My Payments</h2>
                <button className="btn btn-outline-secondary" onClick={() => navigate(`/home`)}>
                    ⬅ Back to Home
                </button>
            </div>

            {payments.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(payment => (
                                <tr key={payment.PaymentID}>
                                    <td>{payment.PaymentID}</td>
                                    <td>Rs. {payment.Amount}</td>
                                    <td>{new Date(payment.PaymentDate).toLocaleDateString()}</td>
                                    <td>{payment.PaymentType}</td>
                                    <td className={payment.PaymentStatus === 'Successful' ? 'text-success' : 'text-warning'}>
                                        {payment.PaymentStatus}
                                    </td>
                                    <td>
                                        {payment.PaymentStatus === 'Pending' && (
                                            <button
                                                className="btn btn-sm btn-outline-success"
                                                onClick={() => handlePayment(payment.PaymentID)}
                                            >
                                                Pay Now
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="alert alert-info">No payments found.</div>
            )}
        </div>
    );
};

export default UserPayment;

