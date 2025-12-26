import express from "express";
import { register, login } from "../controller/authcontroller.js";
import { storePatientPublicKey } from "../controller/authcontroller.js";
import { protect } from "../middlewares/authmiddleware.js";
import { googleAuth } from "../controller/authcontroller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post( "/patient/public-key",protect,storePatientPublicKey);
router.post("/google", googleAuth);

export default router;
