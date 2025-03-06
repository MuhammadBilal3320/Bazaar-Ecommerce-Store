import mongoose from "mongoose";

const productPrototype = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },

    description: {
        type: String,
        required: [true, "Please Enter Product Description"],
    },

    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot be exceed 8 digits"],
    },

    totalRating: {
        type: Number,
        default: 0
    },

    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],

    category: {
        type: String,
        required: [true, "Please Enter Product Category"],
    },

    stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        minLength: [0, "Stock cannot be negative"],
        maxLength: [4, "Stock cannot be greater than 4 digits"],
        default: 1
    },

    numOfReview: {
        type: Number,
        default: 0
    },

    reviews: [
        {
            userId:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            reviewDateTime:{
                type: Date,
                default: Date.now
            }
        }
    ],

    createdBy: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const productSchema = mongoose.model("Product", productPrototype);
export default productSchema;