import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../app/hooks";
import { selectAuthInitialized, selectIsAuthenticated } from "./auth.selectors";
import { handleLogout } from "./auth.handlers";

type Props = {
  children: React.ReactNode;
};

export const RequireAuth = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authInitialized = useSelector(selectAuthInitialized);

  useEffect(() => {
    if (authInitialized && !isAuthenticated) {
      dispatch(handleLogout());
    }
  }, [dispatch, authInitialized, isAuthenticated]);

  if (!isAuthenticated) return null;
  if (!authInitialized) return null;

  return <>{children}</>;
};
