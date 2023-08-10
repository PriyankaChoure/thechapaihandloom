import axios from "axios";
/**
 * API List-
 * FOR LOGIN - localhost:8082/backend/auth/login
 */
const SERVER_URL = "http://localhost:8082/backend/";
export const SERVER_IMAGE_URL = "http://localhost:8082/images/";

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

// fetch product by ID
export const fetchProductByID = async (productID) => {
  const URL = `${SERVER_URL}product/${productID}`;
  try {
    const responseData = await axios.get(URL, { mode: "cors" });
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
