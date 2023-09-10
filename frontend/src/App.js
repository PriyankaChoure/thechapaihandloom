import React from "react";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/system";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
        <HeaderComponent />
        <div>
          <Outlet />
        </div>
        <FooterComponent />
      </SnackbarProvider>
    </StyledEngineProvider>
  );
};
