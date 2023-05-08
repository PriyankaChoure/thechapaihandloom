import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import styles from "./LoginPage.module.css";
import { login } from "../apis/api";
import { LoginComponent } from "../components/Login/LoginComponent";

export const LoginPage = () => {
  const [userCredentials, setUserCredential] = useState({});
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const isValidate = (userData) => {
    console.log(userData);
    if (!isEmail(userData.email)) {
      enqueueSnackbar("Not a valid email", { variant: "warning" });
      return false;
    }
    if (!userData.password) {
      enqueueSnackbar("Password can not be empty", { variant: "warning" });
      return false;
    }
    if (userData.password.length !== 6) {
      enqueueSnackbar("Password must be more than 6 character", {
        variant: "warning",
      });
      return false;
    }
    return true;
  };
  const userLogin = async (userData) => {
    if (!isValidate(userCredentials)) return;
    try {
      const responseData = await login(userData);
      console.log(responseData.data);
      if (!responseData.data.user.isAdmin) {
        enqueueSnackbar("You are not Authenticate user", {
          variant: "error",
        });
      } else {
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
        });
        persistLogin(
          responseData.data.token,
          responseData.data.user.email,
          responseData.data.user.usertype
        );
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        if (err.response.status === 400)
          enqueueSnackbar(err.response.data.message, {
            variant: "error",
          });
        else
          enqueueSnackbar(err.response.data, {
            variant: "error",
          });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          {
            variant: "error",
          }
        );
      }
    }
  };
  const persistLogin = (token, email, userType) => {
    // console.log(token , username, balance);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("userType", userType);
  };
  return (
    <div className={styles.wrraper}>
      <h1>Welcom to Admin Pannel</h1>
      <h4>Please Login First to proceed</h4>
      <LoginComponent
        setUserCredential={setUserCredential}
        userCredentials={userCredentials}
        userLogin={userLogin}
      />
    </div>
  );
};
