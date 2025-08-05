export type TMDBImageType = "poster" | "backdrop" | "profile" | "logo";

const IMAGE_SIZES = {
  poster: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  backdrop: ["w300", "w780", "w1280", "original"],
  profile: ["w45", "w185", "h632", "original"],
  logo: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
};

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

export const getTMDBImageUrl = (
  path: string | null | undefined,
  type: TMDBImageType = "poster",
  size: string = "w500"
): string => {
  if (!path || !path.startsWith("/")) return "";
  if (!IMAGE_SIZES[type].includes(size)) {
    console.warn(`Invalid size '${size}' for type '${type}', using 'original'`);
    size = "original";
  }

  return `${BASE_IMAGE_URL}/${size}${path}`;
};
