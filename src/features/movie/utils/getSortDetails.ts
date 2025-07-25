import type { MovieSortTypes } from "../dto";

interface SortDetail {
  label: string;
  value: `${MovieSortTypes}:${"ASC" | "DESC"}`;
}

export const getSortOptions = (): SortDetail[] => [
  { label: "Найновіші", value: "releaseDate:DESC" },
  { label: "Найстаріші", value: "releaseDate:ASC" },
  { label: "Найпопулярніші", value: "popularity:DESC" },
  { label: "Найкраще оцінені", value: "voteAverage:DESC" },
  { label: "Найбільше оцінок", value: "voteCount:DESC" },
  { label: "Назва (A-W)", value: "title:ASC" },
  { label: "Назва (W-A)", value: "title:DESC" },
];
