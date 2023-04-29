const router = require("express").Router();
const middleware = require("../middlewares/verifytoken");
const userController = require("../controllers/user.controller");
/**
 *  get user by id
 * url - server:8082/backend/user/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * request body -
 * {
 *  userid: "64454824e245e16ad87c67c7"
 * }
 *
 * response -
 * {
    "address": [
        {
            "address_line_1": "1 tower abc",
            "address_line_2": "",
            "city": "chennai",
            "postal_code": "451332",
            "country": "India"
        }
    ],
    "_id": "64454824e245e16ad87c67c7",
    "username": "Priyanka joshi",
    "email": "priya@gmail.com",
    "contact": 9897867859,
    "usertype": "admin",
    "createdAt": "2023-04-23T15:00:52.719Z",
    "updatedAt": "2023-04-25T07:07:36.363Z",
    "__v": 0
}
 */
router.get(
  "/:id",
  middleware.verifyTokenAndAuthorization,
  userController.getUser
);

/**
 * *  get all user details
 * url - server:8082/backend/user/all/admin_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * Response Key -
 *
 * [
    {
        "address": [
            {
                "address_line_1": "1 tower abc",
                "address_line_2": "",
                "city": "chennai",
                "postal_code": "451332",
                "country": "India"
            }
        ],
        "_id": "64454824e245e16ad87c67c7",
        "username": "Priyanka joshi",
        "email": "priya@gmail.com",
        "contact": 9897867859,
        "usertype": "admin",
        "createdAt": "2023-04-23T15:00:52.719Z",
        "updatedAt": "2023-04-25T07:07:36.363Z",
        "__v": 0
    },
    {
        "address": [
            {
                "address_line_1": "1 tower abc",
                "address_line_2": "",
                "city": "chennai",
                "postal_code": "451332",
                "country": "India"
            }
        ],
        "_id": "644bbc95ad106d0e90b019a9",
        "username": "priyanka",
        "email": "priya10@gmail.com",
        "contact": 9897857859,
        "usertype": "admin",
        "createdAt": "2023-04-28T12:31:17.609Z",
        "updatedAt": "2023-04-28T12:31:17.609Z",
        "__v": 0
    }
]
 */
router.get(
  "/all/:id",
  middleware.verifyTokenAndAuthorization,
  userController.getAllUsers
);

/**
 *   update user details -
 * url - server:8082/backend/user/user_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 *
 * Request Body -
 * {"username": "Priyanka C Joshi"}
 *
 * Response - (user details)
 * {
    "address": [
        {
            "address_line_1": "1 tower abc",
            "address_line_2": "",
            "city": "chennai",
            "postal_code": "451332",
            "country": "India"
        }
    ],
    "_id": "644bbc95ad106d0e90b019a9",
    "username": "Priyanka C Joshi",
    "email": "priya10@gmail.com",
    "contact": 9897857859,
    "usertype": "admin",
    "createdAt": "2023-04-28T12:31:17.609Z",
    "updatedAt": "2023-04-29T16:05:20.709Z",
    "__v": 0
}
 */

router.put(
  "/:id",
  middleware.verifyTokenAndAuthorization,
  userController.updateUserDetails
);

/**
 * delete user by id

 * url - server:8082/backend/user/user_id
 *header details -
 * key - token
 * value - Bearer tokenKey
 * Request Body
 * {
    "userid" : "64454824e245e16ad87c67c7"
    }

    Response Body -
    "user deleted successfully"
 */
router.delete(
  "/:id",
  middleware.verifyTokenAndAuthorization,
  userController.deleteUser
);

module.exports = router;
