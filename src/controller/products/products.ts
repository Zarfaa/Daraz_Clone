import { RequestHandler } from "express";
import productCategories from "../../models/productsCategories";

const productsContoller : RequestHandler = async (req, res) =>{
    const {productCategorie} = req.body;

    try {

        const product = await productCategories.find({
            productCategorie
        });
        if(!product){
            return res.json({
                message: "Product Not found"
            })
        }

        return res.json({
            message: "Products Retreived Successfully",
            data: product
        })
        
    } catch (error) {
        console.log("Error", error)
        
    }

}

export default productsContoller;