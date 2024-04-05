import { Box, Stack, Typography } from "@mui/material";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";

const SavedCard = ({ title, location, price, img, bed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgb(161, 161, 172) 0px 2px 6px",
        borderColor: "rgb(113, 113, 132)",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          height: "200px",
          width: "100%",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "5px 5px 0px 0px",
          }}
          alt="Property"
          src={img ? img[0] : ""}
        />
      </Box>
      <Box bgcolor="#f4f4f5" p={2} sx={{}}>
        <Typography color="primary.main" variant="h6" fontSize="22px">
          {`₦ ${price?.toLocaleString()}`}
        </Typography>
      </Box>
      <Box bgcolor="white" px={2} py={3} borderRadius="0 0 5px 5px ">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" >
            {" "}
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <HotelOutlinedIcon />
            <Typography>
              {" "}
              <span style={{ fontSize: "12px" }}>X</span>
              {bed}
            </Typography>
          </Stack>
        </Stack>
        <Typography mt={1} color="#7D879C" variant="subtitle2">
          {location}
        </Typography>
        {/* <CustomDivider />
        <Stack>
          <Typography
            color="#7D879C"
            variant="subtitle2"
            letterSpacing={1.5}
            fontSize="13px"
          >
            Property Owned by
          </Typography>
          <Typography variant="body2" letterSpacing={1.2}>
            Romax Properties Limited
          </Typography>
        </Stack> */}
      </Box>
    </Box>
  );
};

export default SavedCard;
