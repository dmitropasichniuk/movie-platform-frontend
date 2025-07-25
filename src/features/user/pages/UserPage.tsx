import { useEffect } from "react";
import { Button, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { handleLogout } from "../../auth/auth.handlers";
import {
  selectAllUsers,
  selectGetAllUsersLoading,
  selectUserError,
} from "../user.selectors";
import { fetchUsers } from "../user.thunks";

export const UserPage = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectAllUsers);
  const getAllUsersLoading = useAppSelector(selectGetAllUsersLoading);
  const error = useAppSelector(selectUserError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const logoutClick = () => {
    dispatch(handleLogout());
  };

  if (getAllUsersLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!getAllUsersLoading) {
    return (
      <>
        <Button onClick={logoutClick}>
          <ListItemText primary={"Вийти"} />
        </Button>
        <ul>
          {users?.map((u) => (
            <li key={u.id}>{u.email}</li>
          ))}
          <button onClick={() => dispatch(fetchUsers())}>some button</button>
        </ul>
      </>
    );
  }
};
