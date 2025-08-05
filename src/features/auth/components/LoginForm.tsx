import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { type LoginSchemaType, loginSchema } from "../schemas";
import { useLoginHandler } from "../auth.handlers";
import { CustomInput } from "../../../components/ui";

type Props = {
  loading?: boolean;
  onSwitchMode: () => void;
};

export const LoginForm = ({ loading, onSwitchMode }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit = useLoginHandler();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <CustomInput
          placeholder="User Name"
          autoComplete="username"
          icon={<PersonOutlineOutlinedIcon />}
          error={errors.userName}
          helperText={errors.userName?.message}
          {...register("userName")}
        />

        <CustomInput
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          icon={<LockOutlinedIcon />}
          error={errors.password}
          helperText={errors.password?.message}
          {...register("password")}
        />

        <Button type="submit" variant="contained" fullWidth>
          {loading ? <CircularProgress size={20} /> : "Log In"}
        </Button>
        <Typography variant="body2" align="center">
          Don't have an account yet?
          <Button onClick={onSwitchMode}>Register</Button>
        </Typography>
      </Stack>
    </form>
  );
};
