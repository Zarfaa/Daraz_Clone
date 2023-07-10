import { Router } from "express";
import signupController from "../controller/auth/app/signup";
import loginController from "../controller/auth/app/login";

const router = Router();

router.post("/signup",signupController);
router.post("/login",loginController);

export default router;