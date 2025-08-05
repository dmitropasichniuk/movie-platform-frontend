import { Button, Link, ListItemText } from "@mui/material";

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
      component={Link}
      to={path}
      onClick={onClick}
    >
      <ListItemText primary={text} />
    </Button>
  );
};
