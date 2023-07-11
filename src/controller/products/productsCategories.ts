import { RequestHandler } from "express";
import productCategories from "../../models/productsCategories";

const productCategoriesController : RequestHandler =   async  (req, res)  =>{
    const {productCategorie, productName, price } =  req.body;

    try {
        // const newImage = req.file!.path

        const newProductCategories = await productCategories.create({
            productCategorie,
            productName,
            price,
            // image: newImage
           
        })

    return res.json({
        message: "Product Created Successfully",
        data: newProductCategories
    })
        
    } catch (error) {
        console.log("Error", error)
        
    };

};

export default productCategoriesController;