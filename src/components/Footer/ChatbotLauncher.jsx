// ChatBotLauncher.js
import React from "react";
import MyChatBot from "./MyChatbot";
import "./ChatBotLauncher.css"; // Styles will be here
import { SmartToy } from "@mui/icons-material";
import rob from "./rob.png";
import { Box, CardMedia, Typography } from "@mui/material";

const ChatBotLauncher = () => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {isChatOpen && <MyChatBot onClose={toggleChat} />}
      <Box>
        <button className="chatbot-icon" onClick={toggleChat}>
          <CardMedia component={"img"} image={rob} sx={{}} />
          {/* <SmartToy sx={{ color: "white", fontSize: "40px" }} /> */}
        </button>
      </Box>
    </div>
  );
};

export default ChatBotLauncher;
