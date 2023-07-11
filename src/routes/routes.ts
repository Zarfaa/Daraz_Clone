import { Router } from "express";
import signupController from "../controller/auth/app/signup";
import loginController from "../controller/auth/app/login";
import productCategoriesController from "../controller/products/productsCategories";
import productsContoller from "../controller/products/products";
//import upload from "../multer";



const router = Router();

router.post("/signup",signupController);
router.post("/login",loginController);
router.post("/createProductCategorie",productCategoriesController);
router.get("/products", productsContoller);

export default router;