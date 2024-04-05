import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  Divider,
  styled,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Bookmark from "@mui/icons-material/Bookmark";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import PropertyDetails from "./PropertyDetails";
import MenuIcon from "@mui/icons-material/Menu";
// import { userRequest } from "../../requestMethods";
import { dateConverter } from "./utils";

export const CustomDivider = styled(Divider)`
  margin: 16px 0px 24px;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: #7d879c;
`;
const Booking = ({ openDrawer }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  useEffect(() => {
    const getBooking = async () => {
      try {
        const res = await userRequest.get(`/booking/${id}`);
        setBooking(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooking();
  }, [id]);

  return (
    <Box>
      <Stack flex={1} spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "start", md: "center" }}
            width={{ xs: "auto", md: "100%" }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              mb={{ xs: 1.5, md: 0 }}
            >
              <Bookmark
                sx={{
                  color: "primary.main",
                }}
              />
              <Typography
                variant="h5"
                color="text.primary"
                fontSize={{ xs: "20px", md: "25px" }}
              >
                Booking Details
              </Typography>
            </Stack>
          </Stack>
          <IconButton
            onClick={openDrawer}
            sx={{
              display: isNonMobile ? "none" : "inline-flex",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        {booking?.product?.type === "Product" ? (
          <>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1.5}>
                  <Typography>BookingID: </Typography>
                  <Typography color="#7D879C">{booking?.bookingId}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5}>
                  <Typography> Book Date: </Typography>
                  <Typography color="#7D879C">
                    {dateConverter(booking?.bookDate)}
                  </Typography>
                </Stack>{" "}
                <Stack direction="row" spacing={1.5}>
                  <Typography>View Date: </Typography>
                  <Typography color="#7D879C">
                    {booking?.viewDate
                      ? dateConverter(booking?.viewDate)
                      : "Pending"}
                  </Typography>
                </Stack>
              </Stack>

              <Typography variant="h5" >
                {booking?.product?.item?.title}
              </Typography>

              <Typography variant="h5" color="primary.main">
                {`₦ ${booking?.product?.item?.price.toLocaleString()}`}
              </Typography>

              <Carousel images={booking?.product?.item?.img} />
            </Stack>

            <PropertyDetails product={booking?.product?.item} />
          </>
        ) : (
          <>
            {" "}
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1.5}>
                  <Typography>BookingID: </Typography>
                  <Typography color="#7D879C">{booking?.bookingId}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5}>
                  <Typography> Book Date: </Typography>
                  <Typography color="#7D879C">
                    {dateConverter(booking?.bookDate)}
                  </Typography>
                </Stack>{" "}
                <Stack direction="row" spacing={1.5}>
                  <Typography>View Date: </Typography>
                  <Typography color="#7D879C">
                    {booking?.viewDate
                      ? dateConverter(booking?.viewDate)
                      : "Pending"}
                  </Typography>
                </Stack>
              </Stack>

              <Typography variant="h5">
                {booking?.product?.item?.title}
              </Typography>

              <Carousel images={booking?.product?.item?.img} />
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Booking;
