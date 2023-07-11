import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    productCategorie:{
        type: String
    },
    productName: {
        type: String,
        //required: true,
   },
    price: {
        type: String,
        //required: true,
    },
    // image: {
    //     type: String,
    // },
});

const productCategories = mongoose.model('productCategories', productSchema);

export default productCategories