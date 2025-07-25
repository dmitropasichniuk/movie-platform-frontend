import React from "react";
import { TextField, InputAdornment, type TextFieldProps } from "@mui/material";
import { type FieldError } from "react-hook-form";

interface CustomInputProps
  extends Omit<TextFieldProps, "error" | "helperText"> {
  icon?: React.ReactNode;
  error?: FieldError;
  helperText?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  error,
  helperText,
  ...textFieldProps
}) => {
  return (
    <TextField
      {...textFieldProps}
      error={!!error}
      helperText={error?.message || helperText}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "& fieldset": {
            borderRadius: "10px",
          },
        },
      }}
      slotProps={{
        input: {
          startAdornment: icon ? (
            <InputAdornment position="start">{icon}</InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
};
