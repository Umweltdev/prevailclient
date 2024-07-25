import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Stack,
  Paper,
  Box,
  useMediaQuery,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Description, RemoveRedEye, Edit, Message } from "@mui/icons-material";
import Header from "./Header";
import axiosInstance from "../utils/axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
const Invoice = ({ _id, title, content }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
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
      }}
    >
      <Typography variant="subtitle2" flex={"1 1 0"} whiteSpace="pre">
        {_id}
      </Typography>

      <Typography variant="subtitle2" flex="1 1 0" whiteSpace="pre">
        {truncateText(title, 30)}
      </Typography>

      <Typography variant="subtitle2" flex={{ xs: "1 1 0" }} whiteSpace="pre">
        {truncateText(content, 30)}
      </Typography>
      <Stack direction="row" justifyContent="end">
        <Link
           to={`/user/message/view/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <IconButton>
            <RemoveRedEye />
          </IconButton>
        </Link>
        <Link
          to={`/user/message/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <IconButton>
            <Edit />
          </IconButton>
        </Link>
      </Stack>
    </Paper>
  );
};

const Messages = ({ openDrawer }) => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAddresses = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/api/message", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        // console.log(res.data);
        setLoading(false);
        setMessage(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getAddresses();
  }, []);

  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");

  return (
    <Stack spacing={2}>
      <Header
        Icon={Message}
        title={"My Messages"}
        openDrawer={openDrawer}
        button={"Create new message"}
        link={"/user/message/create"}
      />

      <Box>
        {loading ? (
          <Box
            sx={{
              height: "300px",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <CircularProgress />
          </Box>
        ) : message.length > 0 ? (
          <Stack spacing={1} >
            {/* <Stack direction={"row"} sx={{ paddingX: 2 }} display={{xs:"none", md:"flex"}}>
              <Typography variant="subtitle2" flex={"1 1 0"} whiteSpace="pre">
                Message_ID
              </Typography>

              <Typography variant="subtitle2" flex="1 1 0" whiteSpace="pre">
                Message_Title
              </Typography>

              <Typography
                variant="subtitle2"
                flex={{ xs: "1 1 0" }}
                whiteSpace="pre"
              >
                Message_Content
              </Typography>
            </Stack> */}
            {message?.map((address, index) => (
              <Invoice {...address} key={index} />
            ))}
          </Stack>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography>No communication!. Create new communication</Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default Messages;
