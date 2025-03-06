import { query } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import productSchema from "../models/productSchema.js";
import ApiFeature from "../utils/apiFeature.js";
import ErrorHandler from "../utils/errorHandlerClass.js";




// Creating New Product
export const createProduct = catchAsyncError(async(req, res, next)=>{
    
    req.body.createdBy = req.user.userName;

    const product = await productSchema.create(req.body);

    res.status(201).json({success:true ,message: "Create New Product Successfully!", product });
})


// getting All The Products
export const getAllProducts = catchAsyncError(async (req, res, next) => {
    const perPageProduct = 12;

    // Get total product count before applying any filters
    const productCount = await productSchema.countDocuments();

    // Create a new query object with filters and search
    const apiFeature = new ApiFeature(productSchema.find(), req.query).search().filter();
    
    // Clone the query for getting the filtered products
    let products = await apiFeature.query;

    // Get the count of filtered products
    const filteredProductsCount = products.length;

    // Apply pagination and clone the query for pagination
    apiFeature.pagination(perPageProduct);
    
    // Execute the cloned query again for pagination
    products = await apiFeature.query.clone();

    //Getting maximum product price
    const maxPriceResult = await productSchema.aggregate([
        {
            $group: {
                _id: null,
                maxPrice: { $max: "$price" }
            }
        },
        {
            $project: { _id: 0, maxPrice: 1 }
        }
    ]);

    const maxPrice = maxPriceResult.length > 0 ? maxPriceResult[0].maxPrice : null;

    res.status(200).json({
        success: true,
        message: "Get All Products Successfully!",
        product: products,
        productCount: Number(productCount),
        filteredProductsCount,
        perPageProduct,
        maxPrice
    });
});



// get One Product Details
export const getProductDetails = catchAsyncError(async (req, res, next)=>{

    const product = await productSchema.findById(req.params.id);

    if(!product) return next(new ErrorHandler("Product not Found!", 404));

    res.status(200).json({success:true ,message: "Get Product Details Successfully!", product });

})


// Updating a Product
export const updateProduct = catchAsyncError(async(req, res, next)=>{
    
    let updatedProduct = await productSchema.findById(req.params.id);
    
    if(!updatedProduct) return next(new ErrorHandler("Product not Found!", 404));

    updatedProduct = await productSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({success:true ,message: "Product Updated Successfully!", updatedProduct });
})

// Deleting a Product
export const deleteProduct = catchAsyncError(async(req, res, next)=>{

    const deletedProduct = await productSchema.findById(req.params.id);
    
    if(!deletedProduct) return next(new ErrorHandler("Product not Found!", 404));

    await productSchema.findByIdAndDelete(req.params.id);
    
    res.status(200).json({success:true , message: "Product Deleted Successfully!", deletedProduct });
})

// User Reviewing on Product 
export const createProductReview = catchAsyncError(async (req, res, next) => {

    const review = {
        userId: req.user.id,
        name: req.user.userName,
        rating: Number(req.body.rating),
        comment: req.body.comment
    }

    const product = await productSchema.findById(req.body.productId);

    const isReviewed = product.reviews.find( (rev)=> rev.userId.toString() === req.user.id.toString());

    if(isReviewed){
        product.reviews.forEach((element)=>{
            if(rev.userId.toString() === req.user.id.toString()){
                element.rating = req.body.rating;
                element.comment = req.body.comment;
            }
        })
    }
    else{
        product.reviews.push(review);
        product.numOfReview = product.reviews.length;
    }

    let average = 0;
    product.reviews.forEach((element)=>{
        average += element.rating;
    })

    product.totalRating = average / product.reviews.length;

    await product.save({validateBeforeSave: false});

    res.status(200).json({success: true, message: "Review Successfully Added!"})

});

// Delete a Review on Product
export const deleteProductReview = catchAsyncError(async (req, res, next)=>{

    const product = await productSchema.findById(req.query.productId);

    if(!product) return next(new ErrorHandler("Product not Found!", 404));

    const review = product.reviews.filter((rev)=> rev._id.toString() !== req.query.deletedReviewID.toString());

    let average = 0;
    review.forEach((element)=>{
        average += element.rating;
    })

    const totalRating = average / review.length;

    const numberOfReviews = review.length;

    await productSchema.findByIdAndUpdate(req.query.productId, {reviews:review, totalRating, numberOfReviews}, {new: true, validateBeforeSave: true, useFindAndModify:false});

    res.status(200).json({success: true, message: "Review Deleted successfully"});
})



// Get All Reviews one Product 
export const getAllSingleProductReviews = catchAsyncError(async (req, res, next)=>{

    const product = await productSchema.findById(req.query.productId);
    
    if(!product) return next(new ErrorHandler("Product not Found!", 404));

    res.status(200).json({success: true, reviews: product.reviews});

})
