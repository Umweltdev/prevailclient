import * as React from "react"; 
import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField"; 
import { Button, Grid, Card, Typography } from "@mui/material"; 
import CustomizedHook from "../ReusedComponents/MultipleSelect"; 
import BasicButtons from "../ReusedComponents/Button";
 
export default function ContactInput() { 
  return (
    <Card
      sx={{
        margin: "0 auto",
        textAlign: "center",
        width: "70vw",
        padding: "3vw",
        borderRadius: "1.5vw",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        "@media (max-width: 600px)": {
          width: "100%",
          margin: "0 auto",
        },
      }}
    >
      <Grid
        xs
        container // spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          "@media (max-width: 600px)": {
            width: "95vw",
            flexDirection: "column",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "3vw",
            fontWeight: "900",
            marginBottom: "2vh",
            color: "#333",
            "@media (max-width: 600px)": {
              fontSize: "6vw",
              margin: "2vh auto",
            },
          }}
        >
          {" "}
          Talk to Us
        </Typography>

        <Box
          component="form"
          sx={{
            margin: 1,
            display: "flex",
            gap: "2vw",
            flexWrap: "wrap",
            width: "100%",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              margin: "2vh auto",
            },
          }}
          noValidate
          autoComplete="on"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <TextField
            sx={{
              width: "350px",
              "@media (max-width: 600px)": { width: "90vw" },
            }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "350px",
              "@media (max-width: 600px)": { width: "90vw" },
            }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "350px",
              "@media (max-width: 600px)": { width: "90vw" },
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "350px",
              "@media (max-width: 600px)": { width: "90vw" },
            }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "350px",
              "@media (max-width: 600px)": { width: "90vw" },
            }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "350px",
              "@media (max-width: 600px)": { width: "90vw" },
            }}
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="How can we help you"
          multiline
          rows={4} // defaultValue="Default Value"
          sx={{
            width: "730px",
            mt: "2vh",
            "@media (max-width: 600px)": { width: "90vw" },
          }}
          fullWidth
        />
        <CustomizedHook />
        <Button
          variant="contained"
          sx={{
            width: "730px",
            marginTop: "2vh",
            marginBottom: "15vh",
            backgroundColor: "#884ED9",
            "@media (max-width: 600px)": { width: "90vw" },
          }}
        >
          Submit
        </Button>
      </Grid>
    </Card>
  ); } 