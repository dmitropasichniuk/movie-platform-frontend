import { useState } from "react";
import { Box, Skeleton } from "@mui/material";
import { YOUTUBE_URL } from "../../../../shared/constants";
import {
  iframeSkeletonStyles,
  iframeStyles,
  trailerBoxStyles,
  trailerError,
} from "./MovieTrailer.styles";

interface MovieTrailerProps {
  videoId?: string | undefined;
  loading?: boolean;
}

export const MovieTrailer = ({ videoId, loading }: MovieTrailerProps) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (loading && !videoId) {
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  }

  if (!videoId) return undefined;

  const getVideoUrl = (videoId: string) => {
    try {
      const videoUrl = new URL(videoId);
      videoUrl.searchParams.set("autoplay", "0");
      return YOUTUBE_URL + videoUrl.toString();
    } catch {
      return `${YOUTUBE_URL}${videoId}?autoplay=0`;
    }
  };

  return (
    <Box sx={trailerBoxStyles}>
      {!iframeLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={iframeSkeletonStyles}
        />
      )}
      <iframe
        allow="encrypted-media"
        width="100%"
        height="100%"
        src={getVideoUrl(videoId)}
        title="Movie Trailer"
        allowFullScreen
        onLoad={() => setIframeLoaded(true)}
        onError={() => {
          setIframeLoaded(true);
          setHasError(true);
        }}
        style={iframeStyles}
      />
      {hasError && <Box sx={trailerError}>Trailer not available</Box>}
    </Box>
  );
};
