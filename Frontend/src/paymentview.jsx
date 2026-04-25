import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentView = () => {
    const [allPayments, setAllPayments] = useState([]);
    const [filteredPayments, setFilteredPayments] = useState([]);
    const [showPendingOnly, setShowPendingOnly] = useState(false);
    const [paymentTypeFilter, setPaymentTypeFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState(''); // 🔥 New state for search

    const fetchPayments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/payments');
            setAllPayments(response.data);
            setFilteredPayments(response.data);
        } catch (error) {
            console.error('Error fetching payments:', error);
            toast.error('Failed to fetch payments');
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    const handleToggle = () => {
        applyFilters(!showPendingOnly, paymentTypeFilter, searchQuery);
        setShowPendingOnly(!showPendingOnly);
    };

    const handlePaymentTypeChange = (e) => {
        const selectedType = e.target.value;
        setPaymentTypeFilter(selectedType);
        applyFilters(showPendingOnly, selectedType, searchQuery);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        applyFilters(showPendingOnly, paymentTypeFilter, query);
    };

    const applyFilters = (pendingOnly, typeFilter, query) => {
        let payments = [...allPayments];

        if (pendingOnly) {
            payments = payments.filter(payment => payment.StatusName.toLowerCase() === 'pending');
        }

        if (typeFilter !== 'All') {
            payments = payments.filter(payment => payment.PaymentType?.toLowerCase() === typeFilter.toLowerCase());
        }

        if (query.trim() !== '') {
            payments = payments.filter(payment => 
                payment.Username.toLowerCase().includes(query.trim().toLowerCase())
            );
        }

        setFilteredPayments(payments);
    };

    const getStatusBadgeColor = (status) => {
        switch (status.toLowerCase()) {
            case 'paid':
                return 'badge bg-success';
            case 'pending':
                return 'badge bg-danger';
            case 'failed':
                return 'badge bg-warning text-dark';
            default:
                return 'badge bg-secondary';
        }
    };

    return (
        <div className="container py-5">
            <ToastContainer />
            <h2 className="mb-4 text-center">
                {showPendingOnly ? 'Pending Payments' : 'All Payments'}
                {filteredPayments.length > 0 && (
                    <small className="text-muted"> ({filteredPayments.length} shown)</small>
                )}
            </h2>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <button className="btn btn-primary" onClick={handleToggle}>
                    {showPendingOnly ? 'Show All Payments' : 'Show Pending Only'}
                </button>

                <select className="form-select w-auto" value={paymentTypeFilter} onChange={handlePaymentTypeChange}>
                    <option value="All">All Methods</option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>

                <input
                    type="text"
                    className="form-control w-auto"
                    placeholder="Search by username"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="row">
                {filteredPayments.length > 0 ? (
                    filteredPayments.map((payment) => (
                        <div className="col-md-4 mb-4" key={payment.PaymentID}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{payment.Username}</h5>
                                    <p className="card-text">
                                        Amount: ${payment.Amount} <br />
                                        Date: {new Date(payment.PaymentDate).toLocaleDateString()} <br />
                                        Method: {payment.PaymentType || 'N/A'} <br />
                                        <strong>Status: </strong> 
                                        <span className={getStatusBadgeColor(payment.StatusName)} style={{ padding: '5px', borderRadius: '5px' }}>
                                            {payment.StatusName}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-4">No payments found for selected filters.</div>
                )}
            </div>
        </div>
    );
};

export default PaymentView;
