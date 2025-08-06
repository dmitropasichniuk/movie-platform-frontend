import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ListItemText } from "@mui/material";

interface BtnProps {
  text: string;
  path: string;
  activePath: string;
  onClick: () => void;
}

export const HeaderBtn = ({ text, path, activePath, onClick }: BtnProps) => {
  return (
    <Button
      color={path === activePath ? "primary" : "inherit"}
      component={RouterLink}
      to={path}
      onClick={onClick}
    >
      <ListItemText primary={text} />
    </Button>
  );
};
