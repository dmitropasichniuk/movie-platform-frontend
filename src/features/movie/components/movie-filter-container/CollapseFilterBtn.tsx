import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const CollapseFilterBtn = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
        pt: 1,
        pb: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <ExpandLessIcon sx={{ mr: 1 }} />
      ) : (
        <ExpandMoreIcon sx={{ mr: 1 }} />
      )}
      <Typography variant="body2" color="textSecondary">
        {open ? "Hide Filters" : "Show Filters"}
      </Typography>
    </Box>
  );
};
