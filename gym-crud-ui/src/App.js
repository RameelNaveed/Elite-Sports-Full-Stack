import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Home from './home';
import UserCrud from './usercrud';
import Facilities from './facilities';
import Trainers from './trainers.jsx';
import TimeSlots from './timeslots.jsx';
import FeedbackView from './feedbackview.jsx'
import Register from './register';
import UserFacilities from './userfacilities';
import UserTrainers from './usertrainers';
import UserProfile from './userprofile';
import BookFacility from './bookfacility';
import BookTrainer from './booktrainer';
import PaymentView from './paymentview.jsx';
import AdminDashboard from './admindashboard.jsx'; 
import UserFeedback from './userfeedback.jsx';
import UserPayment from './userpayment';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin/users" element={<UserCrud />} />
                <Route path="/admin/facilities" element={<Facilities />} />
                <Route path="/admin/trainers" element={<Trainers />} />
                <Route path="/admin/timeslots" element={<TimeSlots />} />
                <Route path="/admin/feedback" element={<FeedbackView />} />
                <Route path="/user/register" element={<Register />} />
                <Route path="/user/facilities/:id" element={<UserFacilities />} />
                <Route path="/user/trainers/:id" element={<UserTrainers />} />
                <Route path="/user/profile/:id" element={<UserProfile />} />
                <Route path="/user/book-facility/:id" element={<BookFacility />} />
                <Route path="/user/book-trainer/:id" element={<BookTrainer />} />
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/admin/payment" element={<PaymentView />} />
                <Route path="/admin" element={<AdminDashboard />} /> 
                <Route path="/user/feedback/:id" element={<UserFeedback />} />
                <Route path="/user/payment/:id" element={<UserPayment />} />
            </Routes>
        </Router>
    );
}

export default App;
