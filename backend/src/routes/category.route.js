const router = require("express").Router();
const middleware = require("../middlewares/verifytoken");
const categoryController = require("../controllers/category.controller");
/**
 * create new category
 * url - server:8082/backend/category/admin_id
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
  "/:id",
  middleware.verifyAuthorizationAndAuthentication,
  categoryController.addCategory
);

/**
 *  get category by id
 * url - server:8082/backend/category/admin_id
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
  middleware.verifyAuthorizationAndAuthentication,
  categoryController.getCategory
);

/**
 * *  get all categories details
 * url - server:8082/backend/category/all/admin_id
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
  "/all/:id",
  middleware.verifyAuthorizationAndAuthentication,
  categoryController.getAllCategory
);

/**
 *   update category details -
 * url - server:8082/backend/category/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 *
 * Request Body -
 * {"desc": "for fun"}
 *
 * Response - (category details)
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
  categoryController.updateCategoryDetails
);

/**
 * delete category by id

 * url - server:8082/backend/category/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * Request Body
 * {
    "id" : "64454824e245e16ad87c67c7"
    }

    Response Body -
    "category deleted successfully"
 */
router.delete(
  "/:id",
  middleware.verifyAuthorizationAndAuthentication,
  categoryController.deleteCategory
);

module.exports = router;
