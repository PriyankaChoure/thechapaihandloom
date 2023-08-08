const router = require("express").Router();
const middleware = require("../middlewares/verifytoken");
const imageUploadMiddilware = require("../middlewares/imageupload");
const productController = require("../controllers/product.controller");
/**
 * create new product
 * url - server:8082/backend/product/admin_id
 *
 * Header detail-
 * key - token
 * value - Bearer tokenKey
 *
 * Request Body -
 * {
 *  "title": "Silk Saree",
 *  "desc": "Materila of saree will be silk"
 * }
 *
 * Response -
 *  {"_id":"644e37d3a17dc5255cb5f6a3","title":"Silk Saree","desc":"Material will be silk","createdAt":"2023-04-30T09:41:39.631Z","updatedAt":"2023-04-30T09:41:39.631Z","__v":0}
 */
router.post(
  "/",
  imageUploadMiddilware.upload.single("heroImage"),
  productController.addProduct
);

/**
 *  get product by id
 * url - server:8082/backend/product/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * request body -
 * {
 *  id: "64454824e245e16ad87c67c7"
 * }
 *
 * response -
 {
    "_id": "644e3bad4750b966ac76f8ff",
    "title": "Silk Saree",
    "desc": "Material will be silk",
    "createdAt": "2023-04-30T09:58:05.919Z",
    "updatedAt": "2023-04-30T09:58:05.919Z",
    "__v": 0
}
    
 */
router.get(
  "/:id",
  // middleware.verifyAuthorizationAndAuthentication,
  productController.getProduct
);

/**
 * *  get all product details
 * url - server:8082/backend/product/all/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * Response Key -
 *
 [
    {
        "_id": "644e3bad4750b966ac76f8ff",
        "title": "Silk Saree",
        "desc": "Material will be silk",
        "createdAt": "2023-04-30T09:58:05.919Z",
        "updatedAt": "2023-04-30T09:58:05.919Z",
        "__v": 0
    }
]
 */
router.get(
  "/",
  // middleware.verifyAuthorizationAndAuthentication,
  productController.getAllProducts
);

/**
 *   update product details -
 * url - server:8082/backend/product/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 *
 * Request Body -
 * {"desc": "for fun"}
 *
 * Response - (product details)
{
    "_id": "644e37d3a17dc5255cb5f6a3",
    "title": "Silk Saree",
    "desc": "material Silk",
    "createdAt": "2023-04-30T09:41:39.631Z",
    "updatedAt": "2023-04-30T09:55:21.489Z",
    "__v": 0
}
 */

router.put(
  "/:id",
  middleware.verifyAuthorizationAndAuthentication,
  productController.updateProductDetails
);

/**
 * delete product by id

 * url - server:8082/backend/product/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * Request Body
 * {
    "id" : "64454824e245e16ad87c67c7"
    }

    Response Body -
    "product deleted successfully"
 */
router.delete(
  "/:id",
  middleware.verifyAuthorizationAndAuthentication,
  productController.deleteProduct
);

module.exports = router;
