import { Typography, Box, Divider } from "@mui/material";

interface ProfileFieldProps {
  label: string;
  value: string | number;
  isNotEmpty: boolean;
  isLast?: boolean;
}

export const ProfileField = ({
  label,
  value,
  isNotEmpty,
  isLast = false,
}: ProfileFieldProps) => (
  <Box>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        fontSize: "0.875rem",
        fontWeight: 400,
        mb: 0.5,
        textTransform: "none",
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontWeight: 600,
        mb: isLast ? 0 : 2,
        color: isNotEmpty ? "text.primary" : "text.secondary",
      }}
    >
      {value}
    </Typography>
    {!isLast && (
      <Divider
        sx={{
          mb: 2,
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      />
    )}
  </Box>
);
