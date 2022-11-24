const express = require("express");
const { Register } = require("../controllers/authController");
const router = express.Router();


//register router
router.post("/Register",Register);



module.exports = router;