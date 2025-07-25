import { Box, Typography } from "@mui/material";

type Props = {
  error: string | null;
  isEmpty: boolean;
  emptyText?: string;
  loadingText?: string;
  errorTextPrefix?: string;
};

export const ListStatus = ({
  error,
  isEmpty = false,
  emptyText = "No results found.",
  errorTextPrefix = "Error:",
}: Props) => {
  if (!error && !isEmpty) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Typography variant="h6">
        {error ? `${errorTextPrefix} ${error}` : emptyText}
      </Typography>
    </Box>
  );
};
