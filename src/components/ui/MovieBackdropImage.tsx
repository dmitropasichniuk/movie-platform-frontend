import { Box, Skeleton } from "@mui/material";

interface MovieBackdropImageProps {
  imgPath: string | undefined;
  alt?: string;
}

export const MovieBackdropImage = ({
  imgPath = undefined,
  alt = "Backdrop",
}: MovieBackdropImageProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxHeight: "500px",
        aspectRatio: "16/9",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 1,
        mb: 3,
      }}
    >
      {imgPath ? (
        <Box
          component="img"
          src={imgPath}
          alt={alt}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        />
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
    </Box>
  );
};
