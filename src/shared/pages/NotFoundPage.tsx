import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      textAlign="center"
      padding={4}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={3}>
        The address may have been entered incorrectly or the page no longer
        exists.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </Button>
    </Box>
  );
};
