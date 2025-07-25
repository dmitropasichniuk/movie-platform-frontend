import { BrowserRouter, useNavigate, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useEffect } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import { AuthModal } from "./features/auth/components/AuthModal";
import { autoLoginThunk } from "./features/auth/auth.thunks";
import { useAppDispatch } from "./app/hooks";
import { setNavigate } from "./app/navigation";
import { setEnqueueSnackbar } from "./services";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function AppWrapper() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setNavigate(navigate);
    setEnqueueSnackbar(enqueueSnackbar);
  }, [navigate, enqueueSnackbar]);

  useEffect(() => {
    dispatch(autoLoginThunk());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
      <AuthModal />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <AppWrapper />
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
