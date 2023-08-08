import axios from "axios";
/**
 * API List-
 * FOR LOGIN - localhost:8082/backend/auth/login
 */
const SERVER_URL = "http://localhost:8082/backend/";
export const SERVER_IMAGE_URL = "http://localhost:8082/images/";

// method for Login-
export const login = async (userData) => {
  const { email, password } = userData;
  const URL = `${SERVER_URL}auth/login`;
  try {
    const responseData = await axios.post(URL, { email, password });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Products APIs -
 * add new product
 * update product
 * find any product
 * list all product
 * delete product
 */

// add new product
export const addNewProduct = async (productData) => {
  const URL = `${SERVER_URL}product`;
  console.log("in api - ", productData.get("title"));
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const responseData = await axios.post(URL, productData, config);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// List all products
export const fetchAllProductList = async () => {
  const URL = `${SERVER_URL}product`;
  try {
    const responseData = await axios.get(URL, { mode: "cors" });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
