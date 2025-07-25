import { Typography, Box } from "@mui/material";

interface MovieMetaFieldProps {
  label: string;
  value?: string | number | null;
}

export const MovieMetaField = ({ label, value }: MovieMetaFieldProps) => (
  <Box sx={{ mb: 1 }}>
    <Typography variant="subtitle2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body2" gutterBottom fontWeight={700} fontSize={15}>
      {value ?? "-"}
    </Typography>
  </Box>
);
