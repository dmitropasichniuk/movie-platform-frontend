import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { updateUserSchema } from "../schemas";

type UpdateUserForm = z.infer<typeof updateUserSchema>;
type UpdateUserInput = z.input<typeof updateUserSchema>;

interface EditUserDialogProps {
  open: boolean;
  updateLoading?: boolean;
  onClose: () => void;
  onSubmit: (data: UpdateUserForm) => void;
  defaultValues?: Partial<UpdateUserForm>;
}

export const EditUserDialog = ({
  open,
  updateLoading,
  onClose,
  onSubmit,
  defaultValues,
}: EditUserDialogProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserInput, unknown, UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
    defaultValues,
  });

  useEffect(() => {
    if (open && defaultValues) {
      reset(defaultValues);
    }
  }, [open, defaultValues, reset]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Edit Profile</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Username"
              fullWidth
              {...register("userName")}
              error={!!errors.userName}
              helperText={errors.userName?.message}
            />

            <TextField
              label="Email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="First Name"
              fullWidth
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />

            <TextField
              label="Last Name"
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />

            <TextField
              label="Phone"
              fullWidth
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />

            <TextField
              label="Age"
              type="number"
              fullWidth
              {...register("age", { valueAsNumber: true })}
              error={!!errors.age}
              helperText={errors.age?.message}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} variant="contained">
            {updateLoading ? <CircularProgress size={20} /> : "Save"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
