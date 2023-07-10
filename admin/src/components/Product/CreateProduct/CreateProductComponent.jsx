import React, { useState } from "react";
import styles from "./CreateProductComponent.module.css";
import { Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { addNewProduct } from "../../../apis/api";

export const CreateProductComponent = () => {
  const [productDetail, setProductDetail] = useState({});
  const handleSave = async () => {
    console.log(productDetail);
    let productForm = new FormData();
    productForm.append("enctype", "multipart/form-data");
    productForm.append("title", productDetail.title);
    productForm.append("desc", productDetail.desc);
    productForm.append("heroImage", productDetail.heroImage);
    console.log("in controller - ", productForm.get("title"));
    const responseData = await addNewProduct(productForm);
    console.log(responseData.data);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      //   minHeight="100vh"
    >
      <Box className={styles.content}>
        <Stack spacing={2} className={styles.form}>
          <h2 className={styles.title}>Add New Product</h2>

          <TextField
            id="title"
            label="Title"
            variant="outlined"
            title="Title"
            name="Title"
            placeholder="Enter Title"
            fullWidth
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                title: e.target.value,
              })
            }
          />
          <TextField
            id="desc"
            variant="outlined"
            label="Description"
            name="Description"
            type="Description"
            fullWidth
            placeholder="Enter Description"
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                desc: e.target.value,
              })
            }
          />

          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              hidden
              onChange={(e) =>
                setProductDetail({
                  ...productDetail,
                  heroImage: e.target.files[0],
                })
              }
            />
          </Button>

          <Button
            className={styles.button}
            variant="contained"
            onClick={handleSave}
          >
            save
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
