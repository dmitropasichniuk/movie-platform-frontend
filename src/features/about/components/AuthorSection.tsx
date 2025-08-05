import { Typography, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

import author from "../../../assets/imgs/author.jpg";
import { SocialLinks } from "./SocialLinks";

export const AuthorSection = () => (
  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }}
    alignItems={{ xs: "center", sm: "flex-start" }}
    gap={2}
    mb={2}
  >
    <CardMedia
      component="img"
      image={author}
      alt="Dmytro Pasichniuk"
      sx={{ width: 200, height: 200, borderRadius: "10px" }}
    />
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
        Dmytro Pasichniuk
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Fullstack Developer · Angular · Ionic · Node.js · NestJS · 5+ years of
        experience in mobile app development
      </Typography>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Contact me
      </Typography>
      <SocialLinks />
    </Box>
  </Box>
);
