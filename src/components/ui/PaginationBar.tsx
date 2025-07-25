import { Box, Pagination } from "@mui/material";

type Props = {
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  onChange: (newPage: number) => void;
};

export const PaginationBar = ({
  page,
  totalPages,
  hasNext,
  hasPrev,
  onChange,
}: Props) => {
  const handleChange = (_event: unknown, value: number) => {
    if (value !== page) {
      onChange(value);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        variant="outlined"
        shape="rounded"
        hidePrevButton={!hasPrev}
        hideNextButton={!hasNext}
      />
    </Box>
  );
};
