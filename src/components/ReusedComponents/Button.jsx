import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function BasicButtons({ text, bgColor }) {
  return (
    <Stack>
      <Button variant="contained" backgroundColor={bgColor}>
        {text}
      </Button>
    </Stack>
  );
}

export default BasicButtons;
