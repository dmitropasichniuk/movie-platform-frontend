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
        Сторінку не знайдено
      </Typography>
      <Typography variant="body1" mb={3}>
        Можливо, адреса була введена неправильно або сторінка більше не існує.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        На головну
      </Button>
    </Box>
  );
};
