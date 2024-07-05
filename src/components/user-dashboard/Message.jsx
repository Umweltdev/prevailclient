import { useState, useEffect, useContext } from "react";
import { Typography, Stack, Paper, Box, useMediaQuery } from "@mui/material";
import { Description } from "@mui/icons-material";
import Header from "./Header";
import axiosInstance from "../utils/axios";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ openDrawer }) => {
  
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const res = await axiosInstance.get("/api/message/user-messages", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(res.data);
        setMessage(res.data);
      } catch (error) {
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
        Icon={Description}
        title={"My Message"}
        openDrawer={openDrawer}
        button={message ? "Edit message" :"Create new message"}
        link={message ? "/user/message/edit" :"/user/message/create"}
      />

      <Paper
        elevation={0}
        sx={{
          paddingY: 4,
          paddingX: Mobile ? 3 : 1.5,
          borderRadius: 2,
          display: "flex",
          bgcolor: message ? "white" : "transparent",
        }}
      >
        {message ? (
          <Stack spacing={3}>
            <Typography>{message.content}</Typography>
            <Stack spacing={2} direction={'row'}>
              {message.images.map((item) => (
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={item.url}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              ))}
            </Stack>
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
      </Paper>
    </Stack>
  );
};

export default Message;
