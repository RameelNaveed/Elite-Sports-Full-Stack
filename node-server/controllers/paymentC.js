const { sql, poolPromise } = require("../db");

// Create Payment
const createPayment = async (req, res) => {
    const { MembershipID, UserID, Amount, PaymentDate, PaymentType, PaymentStatusID } = req.body;

    if (!Amount || !PaymentDate || !PaymentType) {
        return res.status(400).json({ success: false, message: "Amount, PaymentDate, and PaymentType are required." });
    }

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('MembershipID', sql.Int, MembershipID)
            .input('UserID', sql.Int, UserID)
            .input('Amount', sql.Int, Amount)
            .input('PaymentDate', sql.Date, PaymentDate)
            .input('PaymentType', sql.VarChar(50), PaymentType)
            .input('PaymentStatusID', sql.Int, PaymentStatusID)
            .query(`
                INSERT INTO Payments (MembershipID, UserID, Amount, PaymentDate, PaymentType, PaymentStatusID)
                VALUES (@MembershipID, @UserID, @Amount, @PaymentDate, @PaymentType, @PaymentStatusID);
                SELECT * FROM Payments WHERE PaymentID = SCOPE_IDENTITY();
            `);

        res.status(201).json({ message: "Payment created successfully", payment: result.recordset[0] });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error creating payment", error });
    }
};

// Get Payment by ID
const getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query("SELECT * FROM Payments WHERE PaymentID = @id");

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Payment not found" });
        }

        res.status(200).json(result.recordset[0]);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error fetching payment", error });
    }
};

// Get Payments by User ID
const getPaymentsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userId', sql.Int, userId)
            .query("SELECT * FROM Payments WHERE UserID = @userId");

        res.status(200).json(result.recordset);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error fetching payments", error });
    }
};

// Get Payments by Payment Method
const getPaymentsByMethod = async (req, res) => {
    const { method } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('method', sql.VarChar(50), method)
            .query("SELECT * FROM Payments WHERE PaymentType = @method");

        res.status(200).json(result.recordset);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error fetching payments", error });
    }
};

// Update Payment
// const updatePayment = async (req, res) => {
//     const { id } = req.params;
//     const { Amount, PaymentType, PaymentStatusID } = req.body;
//     try {
//         const pool = await poolPromise;
//         const result = await pool.request()
//             .input('id', sql.Int, id)
//             .input('Amount', sql.Int, Amount)
//             .input('PaymentType', sql.VarChar(50), PaymentType)
//             .input('PaymentStatusID', sql.Int, PaymentStatusID)
//             .query(`
//                 UPDATE Payments 
//                 SET Amount = @Amount, PaymentType = @PaymentType, PaymentStatusID = @PaymentStatusID
//                 WHERE PaymentID = @id;
//                 SELECT * FROM Payments WHERE PaymentID = @id;
//             `);

//         if (result.recordset.length === 0) {
//             return res.status(404).json({ message: "Payment not found" });
//         }

//         res.status(200).json({ message: "Payment updated", payment: result.recordset[0] });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Error updating payment", error });
//     }
// };
const updatePayment = async (req, res) => {
    const { id } = req.params;
    const { PaymentStatusID, PaymentType } = req.body;

    if (!PaymentStatusID || !PaymentType) {
        return res.status(400).json({ message: "Both PaymentStatusID and PaymentType are required." });
    }

    try {
        const pool = await poolPromise;

        // Update the payment
        const result = await pool.request()
            .input("PaymentID", sql.Int, id)
            .input("PaymentStatusID", sql.Int, PaymentStatusID)
            .input("PaymentType", sql.VarChar(50), PaymentType)
            .query(`
                UPDATE Payments
                SET PaymentStatusID = @PaymentStatusID,
                    PaymentType = @PaymentType
                OUTPUT INSERTED.*
                WHERE PaymentID = @PaymentID
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Payment not found." });
        }

        res.status(200).json({ message: "Payment updated successfully", payment: result.recordset[0] });
    } catch (error) {
        console.error("Error updating payment:", error);
        res.status(500).json({ message: "Failed to update payment", error: error.message });
    }
};
// Hard Delete Payment
const deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM Payments OUTPUT DELETED.* WHERE PaymentID = @id");

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Payment not found" });
        }

        res.status(200).json({ message: "Payment deleted", payment: result.recordset[0] });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error deleting payment", error });
    }
};

const getAllPaymentsWithDetails = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(`
                SELECT 
                    P.PaymentID, P.Amount, P.PaymentDate, P.PaymentType,
                    U.Username,
                    PS.StatusName
                FROM Payments P
                INNER JOIN Users U ON P.UserID = U.UserID
                INNER JOIN PaymentStatuses PS ON P.PaymentStatusID = PS.PaymentStatusID
                ORDER BY P.PaymentDate DESC;
            `);

        res.status(200).json(result.recordset);
    } catch (error) {
        console.error("Error fetching payments with details:", error);
        res.status(500).json({ message: "Error fetching payments", error });
    }
};

module.exports = {
    createPayment,
    getPaymentById,
    getPaymentsByUserId,
    getPaymentsByMethod,
    updatePayment,
    deletePayment,
    getAllPaymentsWithDetails
};