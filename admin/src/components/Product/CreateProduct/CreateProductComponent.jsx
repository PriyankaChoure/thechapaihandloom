import React, { useState } from "react";
import styles from "./CreateProductComponent.module.css";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { addNewProduct } from "../../../apis/api";
import { PRODUCT_CATEGORY } from "../../../config/config";
import { useSnackbar } from "notistack";

export const CreateProductComponent = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productImageList, setProductImageList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleSave = async () => {
    console.log(productImageList);
    let productForm = new FormData();
    productForm.append("enctype", "multipart/form-data");
    productForm.append("title", productDetail.title);
    productForm.append("desc", productDetail.desc);
    productForm.append("category", productDetail.category);
    productForm.append("color", productDetail.color);
    productForm.append("price", productDetail.price);
    productForm.append("sku", productDetail.sku);
    productForm.append("heroImage", productDetail.heroImage);
    productImageList.forEach((image) => {
      productForm.append("heroImage", image);
    });
    // console.log("in controller - ", productForm.getAll("productImages"));
    try {
      const responseData = await addNewProduct(productForm);
      console.log(responseData.data);
      enqueueSnackbar("product added successfully", {
        variant: "success",
      });
    } catch (err) {
      console.log(err);
      enqueueSnackbar("something went wrong", {
        variant: "error",
      });
    }
  };

  const handleMultipleImages = (e) => {
    const chosenImages = Array.prototype.slice.call(e.target.files);
    const uplodaedImages = [...productImageList];
    chosenImages.some((image) => {
      if (uplodaedImages.findIndex((f) => f.name === image.name) === -1)
        uplodaedImages.push(image);
    });
    console.log(uplodaedImages);
    setProductImageList(uplodaedImages);
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
            name="title"
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
            name="description"
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
          <TextField
            id="category"
            select
            defaultValue="all"
            label="category"
            variant="outlined"
            title="category"
            name="category"
            fullWidth
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                category: e.target.value,
              })
            }
          >
            {PRODUCT_CATEGORY.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="color"
            label="Color"
            variant="outlined"
            title="color"
            name="color"
            placeholder="Enter color"
            fullWidth
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                color: e.target.value,
              })
            }
          />
          <TextField
            id="price"
            type="Number"
            label="price"
            variant="outlined"
            title="price"
            name="price"
            placeholder="Enter price"
            fullWidth
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                price: e.target.value,
              })
            }
          />
          <TextField
            id="sku"
            label="SKU"
            variant="outlined"
            title="SKU"
            name="sku"
            placeholder="Enter SKU"
            fullWidth
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                sku: e.target.value,
              })
            }
          />

          <Button variant="contained" component="label">
            Upload Hero image
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

          <Button variant="contained" component="label">
            Upload other images
            <input type="file" multiple onChange={handleMultipleImages} />
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
