import { catchAsyncError } from "../middleware/catchAsyncError.js"
import orderSchema from "../models/orderSchema.js"
import ErrorHandler from "../utils/errorHandlerClass.js"
import productSchema from "../models/productSchema.js"

// Creating new order
export const createOrder = catchAsyncError(async (req, res, next) => {

    const newOrder = await orderSchema.create({
        userId: req.user.id,
        shippingInfo: req.body.shippingInfo,
        orderItems: req.body.orderItems,
        paymentInfo: req.body.paymentInfo,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        paidAt: Date.now()
    })

    res.status(201).json({ success: true, newOrder })
})

// Get single Order 
export const getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await orderSchema.findById(req.params.orderId).populate("userId", "userName email");
    if (!order) {
        return next(new ErrorHandler("Invalid Order! Order not Found.", 404));
    }

    res.status(200).json({ success: true, order });
})

// Get All Order Which one orderd by logged in user
export const getUserAllOrders = catchAsyncError(async (req, res, next) => {

    const orders = await orderSchema.find({ userId: req.user.id });
    if (!orders) {
        return next(new ErrorHandler("No Order Found!", 404));
    }

    res.status(200).json({ success: true, orders });

})

// Get All Orders ----> For Master and Admin
export const getAllOrders = catchAsyncError(async (req, res, next) => {

    const orders = await orderSchema.find().populate("userId", "userName");

    let totalOrdersAmount = 0;
    orders.forEach(order => {
        totalOrdersAmount = totalOrdersAmount + order.totalPrice;
    })

    res.status(200).json({ success: true, totalOrdersAmount, orders });

})

// Update Order Status ---> for Master and Admin
export const updateOrderStatus = catchAsyncError(async (req, res, next) => {

    const order = await orderSchema.findById(req.params.orderId);
    if (!order) {
        return next(new ErrorHandler("Invalid Order! Order not Found.", 404));
    }

    if (order.orderStatus === "delivered") {
        return next(new ErrorHandler("Order is already delivered!", 400));
    }

    order.orderItems.forEach(async (ord) => {
        const product = await productSchema.findById(ord.productId);
        product.stock = product.stock - ord.quantity;
        await product.save({ validateBeforeSave: true });
    })

    order.orderStatus = req.body.orderStatus;
    if (order.orderStatus === "delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: true });

    res.status(200).json({ success: true, updatedOrder: order });

})

// Delete Order ----> For Master and Admin
export const deleteOrder = catchAsyncError(async (req, res, next) => {

    const order = await orderSchema.findById(req.params.orderId);
    if (!order) {
        return next(new ErrorHandler("Invalid Order! Order not Found.", 404));
    }

    await order.deleteOne();

    res.status(200).json({ success: true, message: "Order deleted successfully!" });

})