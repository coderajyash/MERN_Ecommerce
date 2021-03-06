const express = require("express")
const router = express.Router();
const {isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth")
const {getUserById,pushOrderInPurchaseList} = require("../controllers/user")
const {updateStock} = require("../controllers/product")


const {getOrderById,createOrder,getAllOrders} = require("../controllers/order")


//params
router.param("userId",getUserById)
router.param("orderId",getOrderById)

//create
router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)
router.get("/odrder/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)




module.exports = router;
