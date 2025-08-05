import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";

import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setShowAuthModal } from "../auth.slice";
import {
  selectIsLoginLoading,
  selectIsRegisterLoading,
  selectShowAuthModal,
} from "../auth.selectors";

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState<"login" | "register">("login");
  const open = useAppSelector(selectShowAuthModal);
  const isLoginLoading = useAppSelector(selectIsLoginLoading);
  const isRegisterLoading = useAppSelector(selectIsRegisterLoading);

  const switchMode = () => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
  };

  const handleClose = () => {
    dispatch(setShowAuthModal(false));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "26px" }}>
        {mode === "login" ? "Log In" : "Register"}
      </DialogTitle>
      <DialogContent>
        {mode === "login" ? (
          <LoginForm onSwitchMode={switchMode} loading={isLoginLoading} />
        ) : (
          <RegisterForm onSwitchMode={switchMode} loading={isRegisterLoading} />
        )}
      </DialogContent>
    </Dialog>
  );
};
