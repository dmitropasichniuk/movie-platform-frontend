import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { isEqual, pick } from "lodash";
import EditIcon from "@mui/icons-material/Edit";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../auth/auth.selectors";
import userImg from "../../../assets/imgs/user.png";
import { ProfileField } from "../components";
import { mainBoxStyle, mainCardMediaStyles } from "../../../theme/styles";
import { EditUserDialog } from "../components";
import type { UpdateUserDto } from "../../../types";
import { updateUserThunk } from "../user.thunks";
import { selectUpdateUserLoading } from "../user.selectors";
import { NotificationService } from "../../../services";

export const UserPage = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);
  const updateLoading = useAppSelector(selectUpdateUserLoading);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openEditDialog = () => {
    setDialogOpen(true);
  };

  const handleUpdateUser = async (data: UpdateUserDto) => {
    if (!user) {
      NotificationService.error("User not found");
      return;
    }

    const currentUserData = pick(user, Object.keys(data));
    const hasChanges = !isEqual(data, currentUserData);
    if (!hasChanges) {
      NotificationService.info("No changes to save");
      setDialogOpen(false);
      return;
    }

    try {
      await dispatch(updateUserThunk({ id: user.id, data })).unwrap();

      NotificationService.success("Profile updated successfully");
      setDialogOpen(false);
    } catch (error) {
      console.error("Update user error:", error);
      NotificationService.error("Error updating profile");
    }
  };

  const closeEditDialog = () => {
    setDialogOpen(false);
  };

  const profileFields = [
    {
      label: "Username",
      value: user?.userName || "Add username",
      isNotEmpty: Boolean(user?.userName?.trim()),
    },
    {
      label: "Email",
      value: user?.email || "Add email",
      isNotEmpty: Boolean(user?.email?.trim()),
    },
    {
      label: "First Name",
      value: user?.firstName || "Add first name",
      isNotEmpty: Boolean(user?.firstName?.trim()),
    },
    {
      label: "Last Name",
      value: user?.lastName || "Add last name",
      isNotEmpty: Boolean(user?.lastName?.trim()),
    },
    {
      label: "Phone",
      value: user?.phone || "Add phone",
      isNotEmpty: Boolean(user?.phone?.trim()),
    },
    {
      label: "Age",
      value: user?.age ? String(user.age) : "Add age",
      isNotEmpty: Boolean(user?.age),
    },
  ];

  return (
    <>
      <Box sx={{ ...mainBoxStyle(), maxWidth: "max-content", mx: "auto" }}>
        <Box>
          <CardMedia
            component="img"
            image={userImg}
            alt="User Avatar"
            sx={mainCardMediaStyles(3)}
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {"User Profile"}
            </Typography>
            <IconButton aria-label={"Edit Profile"} onClick={openEditDialog}>
              <EditIcon />
            </IconButton>
          </Box>

          <Box sx={{ mt: 3 }}>
            {profileFields.map((field, index) => (
              <ProfileField
                key={field.label}
                label={field.label}
                value={field.value}
                isNotEmpty={field.isNotEmpty}
                isLast={index === profileFields.length - 1}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <EditUserDialog
        open={isDialogOpen}
        updateLoading={updateLoading}
        onClose={closeEditDialog}
        onSubmit={handleUpdateUser}
        defaultValues={user || undefined}
      />
    </>
  );
};
