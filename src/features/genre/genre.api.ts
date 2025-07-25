import { api } from "../../app/axios";
import type { GenreDto } from "./dto/genre.dto";

export const getAllGenres = async (): Promise<GenreDto[]> => {
  const response = await api.get("/genres");
  return response.data.data;
};
