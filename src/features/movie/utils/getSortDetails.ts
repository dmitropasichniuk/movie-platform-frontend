import type { MovieSortTypes } from "../dto";

interface SortDetail {
  label: string;
  value: `${MovieSortTypes}:${"ASC" | "DESC"}`;
}

export const getSortOptions = (): SortDetail[] => [
  { label: "Latest", value: "releaseDate:DESC" },
  { label: "Oldest", value: "releaseDate:ASC" },
  { label: "Popularity", value: "popularity:DESC" },
  { label: "Top Rated", value: "voteAverage:DESC" },
  { label: "Most Voted", value: "voteCount:DESC" },
  { label: "Title (A-Z)", value: "title:ASC" },
  { label: "Title (Z-A)", value: "title:DESC" },
];
