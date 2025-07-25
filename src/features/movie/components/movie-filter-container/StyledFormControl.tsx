import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 150,
  flex: "1 1",

  // 600px+ breakpoint
  [theme.breakpoints.down("sm")]: {
    // marginRight: 0,
    // flex: "1 1 100px",
  },
}));
