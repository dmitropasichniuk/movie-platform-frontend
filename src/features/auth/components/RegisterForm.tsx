import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { type RegisterSchemaType, registerSchema } from "../schemas";
import { useRegisterHandler } from "../auth.handlers";
import { CustomInput } from "../../../components/ui";

type Props = {
  loading?: boolean;
  onSwitchMode: () => void;
};

export const RegisterForm = ({ loading, onSwitchMode }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = useRegisterHandler();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <CustomInput
          placeholder="User Name"
          {...register("userName")}
          error={errors.userName}
          helperText={errors.userName?.message}
          icon={<PersonOutlineOutlinedIcon />}
        />
        <CustomInput
          placeholder="Email"
          {...register("email")}
          error={errors.email}
          helperText={errors.email?.message}
          icon={<EmailOutlinedIcon />}
        />
        <CustomInput
          placeholder="Password"
          type="password"
          {...register("password")}
          error={errors.password}
          helperText={errors.password?.message}
          icon={<LockOutlinedIcon />}
        />

        <CustomInput
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          icon={<LockOutlinedIcon />}
        />

        <Button type="submit" variant="contained" fullWidth>
          {loading ? <CircularProgress size={20} /> : "Register"}
        </Button>
        <Typography variant="body2" align="center">
          Do you have an account? <Button onClick={onSwitchMode}>Log In</Button>
        </Typography>
      </Stack>
    </form>
  );
};
