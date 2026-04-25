// const express = require("express");
// const { 
//     createPayment, 
//     getPaymentById, 
//     getPaymentsByUserId, 
//     getPaymentsByMethod, 
//     updatePayment, 
//     deletePayment,
//     getAllPaymentsWithDetails
// } = require("../controllers/paymentC");

// const router = express.Router();

// router.post("/", createPayment);
// router.get("/", getAllPaymentsWithDetails);
// router.get("/:id", getPaymentById);
// router.get("/user/:userId", getPaymentsByUserId);
// router.get("/method/:method", getPaymentsByMethod);
// router.put("/:id", updatePayment);
// router.delete("/:id", deletePayment);

// module.exports = router;
const express = require("express");
const {
    createPayment,
    getPaymentById,
    getPaymentsByUserId,
    getPaymentsByMethod,
    getAllPaymentsWithDetails, // ✅ Add this controller
    updatePayment,
    deletePayment
} = require("../controllers/paymentC");

const router = express.Router();

router.post("/", createPayment);
router.get("/", getAllPaymentsWithDetails); // ✅ Add this ABOVE the dynamic route

router.get("/user/:userId", getPaymentsByUserId);
router.get("/method/:method", getPaymentsByMethod);
router.get("/:id", getPaymentById); // Must be at the bottom of GETs

router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;
