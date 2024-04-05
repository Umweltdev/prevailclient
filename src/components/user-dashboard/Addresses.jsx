import { useState, useEffect } from "react";
import {
  Typography,
  Stack,
  Button,
  Paper,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
// import { userRequest } from "../../requestMethods";

const Address = ({ _id, fullName, address, phone, state, setDeleteFlag, deleteFlag }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleDeleteAddress = async () => {
    try {
      await userRequest.delete(`/address/${_id}`);
      setDeleteFlag(!deleteFlag)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Paper
      elevation={0}
      sx={{
        paddingX: 2,
        paddingY: 1,
        display: "flex",
        bgcolor: "white",
        borderRadius: "10px",
        alignItems: "center",
        textTransform: "capitalize",
        gap: 1,
        flexWrap: "wrap",
        flexDirection: isNonMobile ? "row" : "column",
        columnGap: 1.5,
        // justifyContent: "space-between"
      }}
    >
      <Typography variant="subtitle2" flex={"1 1 0"} whiteSpace="pre">
        {fullName}
      </Typography>

      <Typography variant="subtitle2" flex="1 1 0" whiteSpace="pre">
        {phone}
      </Typography>

      <Typography
        variant="subtitle2"
        flex={{ xs: "1 1 0", sm: "1 1 200px" }}
        whiteSpace="pre"
      >
        {` ${address} ${state} State`}
      </Typography>
      {/* <Typography variant="subtitle2" flex="1 1 0">
        { ` ${state} State`}
      </Typography> */}
      <Stack direction="row" justifyContent="end">
        <Link
          to={`/user/addresses/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>

        <IconButton onClick={handleDeleteAddress}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

const Addresses = ({ openDrawer }) => {
  const [addresses, setAddresses] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false)

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const res = await userRequest.get("/address");
        setAddresses(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddresses();
  }, [deleteFlag]);
  return (
    <Stack spacing={2}>
      <Header
        Icon={PlaceIcon}
        title={"My Addresses"}
        openDrawer={openDrawer}
        button="Add New Address"
        link={`/user/addresses/new`}
      />

      { addresses.length === 0 ? <Box>
         <Typography variant="h5" textAlign="center" mt={5}>No Address Found</Typography>
      </Box> : <Stack spacing={2}>
        {addresses?.map((address, index) => (
          <Address {...address} setDeleteFlag={setDeleteFlag} deleteFlag={deleteFlag} key={index} />
        ))}
      </Stack>}
    </Stack>
  );
};

export default Addresses;
