import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Divider,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const SectionContainer = ({
  title,
  children,
  defaultOpen = true,
}: SectionContainerProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box sx={{ mb: 4 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Collapse in={open}>
        <Box mt={2}>{children}</Box>
      </Collapse>
    </Box>
  );
};
