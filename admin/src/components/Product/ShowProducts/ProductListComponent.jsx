import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "./ProductListComponent.module.css";
import { SERVER_IMAGE_URL, fetchAllProductList } from "../../../apis/api";
export const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    try {
      const responseData = await fetchAllProductList();
      setProductList(responseData.data);
      console.log(responseData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">SKU</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.desc}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.color}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.sku}</TableCell>
                <TableCell align="right">
                  <img
                    src={SERVER_IMAGE_URL + row.heroImage}
                    crossOrigin="Anonymous"
                    alt="heroImage"
                    className={styles.heroimage}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
