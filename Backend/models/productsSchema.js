import mongoose, { Types } from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    qty: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    reviews: [reviewSchema],
}, {
    timestamps: true,
});


const Product = mongoose.model("Product", productSchema);
export default Product;