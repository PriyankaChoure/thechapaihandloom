import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";

const App = () => {
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
        <div>
          <Outlet />
        </div>
      </SnackbarProvider>
    </StyledEngineProvider>
  );
};

export default App;
