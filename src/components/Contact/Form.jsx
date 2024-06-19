import React from "react";
import { InputDesign, LongInputDesign } from "./assets/InputDesign";
import { TextArea } from "./assets/TextArea";
import { Box, Fab, Grid, Typography } from "@mui/material";
import MultipleSelect from "./assets/MultipleSelect";

const Form = () => {
  return (
    <Box
      sx={{
        background: "#FBF9FF",
        width: "692px",
        p: "9px 0 69px 0",
        borderRadius: "16px",
        "@media (max-width: 600px)": {
          width: "90vw",
          height: "unset",
        },
      }}
    >
      <Grid sx={{}}>
        <Typography
          sx={{
            color: "1D0D40",
            fontSize: "28px",
            fontWeight: "500",
            lineHeight: "110%",
            letterSpacing: "-0.28px",
            pt: "58px",
            pl: "44px",
            pb: "25px",
          }}
        >
          Talk To Us
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "21px",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <InputDesign label={"First Name"} />
        <InputDesign label={"Last Name"} />
        <InputDesign label={"Email"} />
        <InputDesign label={"Phone"} />
        <InputDesign label={"Location"} />
        <InputDesign label={"company Name"} />
      </Grid>
      <Grid
        sx={{
          margin: "auto",
          textAlign: "center",
          mt: "16px",
        }}
      >
        <LongInputDesign label={"Website Link"} />
        <TextArea
          label={"How Can We Help You"}
          sx={{
            "@media (max-width: 600px)": {
              width: "90vw",
            },
          }}
        />
        <MultipleSelect />
      </Grid>
      <Grid
        sx={{
          margin: "auto",
          textAlign: "center",
          mt: "16px",
          "@media (max-width: 600px)": {
            m: "15px auto 60px auto",
          },
        }}
      >
        <Fab
          sx={{
            color: "#FFF",
            fontSize: "16px",
            width: "620.204px",
            borderRadius: "5px",
            background: "#6E3EF4;",
            transition: "0.5s all ease-in-out",
            boxShadow: "0",
            "&:hover": { boxShadow: "0", color: "#fff", background: "#6E3EF4" },
            "@media (max-width: 600px)": {
              width: "85vw",
              fontSiz: "10.992px",
            },
          }}
          // onClick={onClick}
          // disabled={disabled}
        >
          Submit
        </Fab>
      </Grid>
    </Box>
  );
};

export default Form;
