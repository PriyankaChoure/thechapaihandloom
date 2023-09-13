import axios from "axios";
import { SERVER_URL } from "../config/config";

// List all products
export const fetchShopDetails = async () => {
  const URL = `${SERVER_URL}shop`;
  try {
    console.log(URL);
    const responseData = await axios.get(URL);
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
