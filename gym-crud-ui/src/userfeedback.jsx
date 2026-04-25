
// import React, { useEffect, useState } from 'react';
// import { useParams, /*useNavigate*/ } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserFeedback = () => {
//     const { id } = useParams();
//     //const navigate = useNavigate();
//     const [content, setContent] = useState("");
//     const [rating, setRating] = useState("");
//     const [editingId, setEditingId] = useState(null);
//     const [hasSubmitted, setHasSubmitted] = useState(false);

//     useEffect(() => {
//         const checkIfFeedbackExists = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:3000/api/feedback/user/${id}`);
//                 if (res.data.length > 0) {
//                     setHasSubmitted(true);
//                 }
//             } catch (err) {
//                 console.error(err);
//                 toast.error("Failed to check feedback existence.");
//             }
//         };
//         checkIfFeedbackExists();
//     }, [id]);

//     // const checkIfFeedbackExists = async () => {
//     //     try {
//     //         const res = await axios.get(`http://localhost:3000/api/users/${id}/feedback`);
//     //         if (res.data.length > 0) {
//     //             setHasSubmitted(true);
//     //         }
//     //     } catch (err) {
//     //         console.error(err);
//     //         toast.error("Failed to check feedback existence.");
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!content || !rating) {
//             toast.error("Please provide both content and rating.");
//             return;
//         }

//         if (!editingId && hasSubmitted) {
//             toast.warn("You have already submitted feedback.");
//             return;
//         }

//         try {
//             const today = new Date().toISOString().split('T')[0];
//             if (editingId) {
//                 await axios.put(`http://localhost:3000/api/feedback/${editingId}`, {
//                     Content: content,
//                     Rating: parseInt(rating)
//                 });
//                 toast.success("Feedback updated successfully");
//             } else {
//                 await axios.post('http://localhost:3000/api/feedback', {
//                     UserID: parseInt(id),
//                     Content: content,
//                     Rating: parseInt(rating),
//                     FeedbackDate: today
//                 });
//                 toast.success("Feedback submitted successfully");
//                 setHasSubmitted(true);
//             }

//             setContent("");
//             setRating("");
//             setEditingId(null);
//         } catch (err) {
//             console.error("Error submitting feedback:", err);
//             toast.error("Submission failed.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <ToastContainer />
//             <h2 className="fw-bold text-primary mb-4">Submit Feedback</h2>

//             <form onSubmit={handleSubmit} className="mb-4">
//                 <div className="mb-3">
//                     <label className="form-label">Feedback</label>
//                     <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} rows="3" required></textarea>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Rating (1-5)</label>
//                     <input type="number" className="form-control" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
//                 </div>
//                 <button type="submit" className="btn btn-primary">{editingId ? "Update" : "Submit"} Feedback</button>
//             </form>
//         </div>
//     );
// };

// export default UserFeedback;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserFeedback = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [existingFeedback, setExistingFeedback] = useState(null);

    useEffect(() => {
        const checkIfFeedbackExists = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/feedback/user/${id}`);
                if (res.data.length > 0) {
                    setHasSubmitted(true);
                    setExistingFeedback(res.data[0]); // Assuming only one feedback per user
                }
            } catch (err) {
                console.error(err);
                toast.error("Failed to check feedback existence.");
            }
        };
        checkIfFeedbackExists();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content || !rating) {
            toast.error("Please provide both content and rating.");
            return;
        }

        try {
            const today = new Date().toISOString().split('T')[0];
            await axios.post('http://localhost:3000/api/feedback', {
                UserID: parseInt(id),
                Content: content,
                Rating: parseInt(rating),
                FeedbackDate: today
            });
            toast.success("Feedback submitted successfully");
            setHasSubmitted(true);
            setExistingFeedback({ Content: content, Rating: rating });
            setContent("");
            setRating("");
        } catch (err) {
            console.error("Error submitting feedback:", err);
            toast.error("Submission failed.");
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-primary">User Feedback</h2>
                <button className="btn btn-outline-secondary" onClick={() => navigate('/home')}>
                    ⬅ Back to Home
                </button>
            </div>

            {hasSubmitted && existingFeedback ? (
                <div className="alert alert-success">
                    <h5 className="fw-bold">Thank you for your feedback!</h5>
                    <p><strong>Rating:</strong> {existingFeedback.Rating}</p>
                    <p><strong>Comment:</strong> {existingFeedback.Content}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-3">
                        <label className="form-label">Feedback</label>
                        <textarea
                            className="form-control"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Rating (1-5)</label>
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Feedback</button>
                </form>
            )}
        </div>
    );
};

export default UserFeedback;
