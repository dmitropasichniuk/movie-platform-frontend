import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllGenres } from "./genre.api";

export const getGenresThunk = createAsyncThunk("genres/getGenres", async () => {
  return await getAllGenres();
});
