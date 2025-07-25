import type { MovieFilterDto } from "./dto";

export const mergeFiltersWithResetPage = (
  current: MovieFilterDto,
  patch: Partial<MovieFilterDto>
): MovieFilterDto => {
  const shouldResetPage = Object.keys(patch).some(
    (key) =>
      key !== "page" &&
      current[key as keyof MovieFilterDto] !==
        patch[key as keyof MovieFilterDto]
  );

  return {
    ...current,
    ...patch,
    page: shouldResetPage ? 1 : patch.page ?? current.page ?? 1,
  };
};
