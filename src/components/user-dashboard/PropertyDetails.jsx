import { Typography, Stack, Grid } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
const PropertyDetails = ({ product }) => {
  return (
    <>
      <Stack spacing={1}>
      <Stack direction="row" spacing={1.5}>
          <Typography>Address: </Typography>
          <Typography color="#7D879C">{product?.address || "Will updated Soon"}</Typography>
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <Typography>Location: </Typography>
          <Typography color="#7D879C">{product?.location}</Typography>
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <Typography> Category: </Typography>
          <Typography color="#7D879C">{product?.category}</Typography>
        </Stack>{" "}
        <Stack direction="row" spacing={1.5}>
          <Typography>Availability</Typography>
          <Typography color="#7D879C">Yes</Typography>
        </Stack>
      </Stack>

      <Grid
        container
        spacing={2}
        sx={{
          borderTop: "1px solid #dedee2",
          borderBottom: "1px solid #dedee2",
          padding: "5px 0 20px 0",
          width: "100% !important",
        }}
      >
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            paddingLeft: "0 !important",
          }}
        >
          <Stack spacing={0.4}>
            <Typography variant="subtitle1" letterSpacing={1.3} color="#6c6d7f">
              PROPERTY TYPE
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <HomeOutlinedIcon />
              <Typography>{product?.propertyType || "House"}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            paddingLeft: "0 !important",
          }}
        >
          <Stack spacing={0.4}>
            <Typography variant="subtitle1" letterSpacing={1.3} color="#6c6d7f">
              BEDROOMS
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <HotelOutlinedIcon />
              <Typography>
                {" "}
                <span style={{ fontSize: "12px" }}>X</span>
                {product?.bed}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            paddingLeft: "0 !important",
          }}
        >
          <Stack spacing={0.4}>
            <Typography variant="subtitle1" letterSpacing={1.3} color="#6c6d7f">
              BATHROOMS
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <BathtubOutlinedIcon />
              <Typography>
                <span style={{ fontSize: "12px" }}>X</span>
                {product?.bath}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            paddingLeft: "0 !important",
          }}
        >
          <Stack spacing={0.4}>
            <Typography variant="subtitle1" letterSpacing={1.3} color="#6c6d7f">
              SIZE
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <AspectRatioOutlinedIcon />
              <Typography>{product?.size}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Stack spacing={0.5}>
        <Typography variant="body2" fontSize="17px" letterSpacing={1.3}>
          PROPERTY DESCRIPTION
        </Typography>
        <Typography>{product?.desc}</Typography>
      </Stack>

      <Stack>
        <Typography variant="body2" fontSize="17px" letterSpacing={1.3} mb={1}>
          PROPERTY FEATURES
        </Typography>

        <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {product?.features.map((feat) => (
            <li className="list">{feat}</li>
          ))}
        </ul>
      </Stack>
    </>
  );
};

export default PropertyDetails;
