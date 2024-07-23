// import { useState, useEffect, useContext, useRef } from "react";
// import {
//   Typography,
//   Stack,
//   Paper,
//   Box,
//   CircularProgress,
//   OutlinedInput,
//   InputAdornment,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import { Message as MessageIcon, Send as SendIcon } from "@mui/icons-material";
// import Header from "./Header"; // Assuming you have a Header component
// import axiosInstance from "../utils/axios"; // Assuming you have axios configured
// import { AuthContext } from "../../context/AuthContext"; // Assuming you have an AuthContext
// import { useParams } from "react-router-dom";
// import moment from "moment";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   chatContainer: {
//     padding: theme.spacing(2),
//     height: "70vh",
//     overflowY: "auto",
//     display: "flex",
//     flexDirection: "column",
//   },
//   messageContainer: {
//     display: "flex",
//     flexDirection: "column",
//     margin: theme.spacing(1, 0),
//   },
//   message: {
//     //  padding: theme.spacing(1),
//     borderRadius: theme.shape.borderRadius,
//     maxWidth: "100%",
//     wordBreak: "break-word",
//   },
//   sent: {
//     alignSelf: "flex-end",
//     backgroundColor: "#f3e8ee",
//   },
//   received: {
//     alignSelf: "flex-start",
//     backgroundColor: "#fff",
//     border: "1px solid #f1f1f1",
//   },
//   timestamp: {
//     fontSize: "0.5rem !important",
//     marginTop: theme.spacing(0.5),
//     textAlign: "right",
//     color:"#788585"
//   },
//   dateSeparator: {
//     textAlign: "center",
//     fontSize: "12px !important",
//     color: theme.palette.text.secondary,
//     margin: theme.spacing(2, 0),
//     backgroundColor: "#dcdcdc",
//     borderRadius: "100px",
//     padding: "2px 10px",
    
//   },
//   inputContainer: {
//     padding: theme.spacing(1.5),
//     backgroundColor: "#f7f7f7",
//     borderTop: "1px solid #e0e0e0",
//     marginTop: "auto",
//   },
// }));

// const groupMessagesByDate = (messages) => {
//   return messages.reduce((acc, message) => {
//     const date = moment(message.createdAt).format("YYYY-MM-DD");
//     if (!acc[date]) {
//       acc[date] = [];
//     }
//     acc[date].push(message);
//     return acc;
//   }, {});
// };

// const Message = ({ content, timestamp, isSent }) => {
//   const classes = useStyles();

//   return (
//     <div className={`${classes.messageContainer} ${isSent ? "sent" : "received"}`}>
//       <Box className={`${classes.message} ${isSent ? classes.sent : classes.received}`} sx={{px: "5px", py:"2px"}}>
//         <Typography sx={{fontSize: "12px", color:"#031927"}}>{content}</Typography>
//         <Typography className={classes.timestamp}>
//           {moment(timestamp).format("HH:mm")}
//         </Typography>
//       </Box>
//     </div>
//   );
// };

// const Chat = ({ messages, currentUserId }) => {
//   const classes = useStyles();
//   const groupedMessages = groupMessagesByDate(messages);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div className={classes.chatContainer}>
//       {Object.keys(groupedMessages).map((date) => (
//         <div key={date}>
//           <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
//           <Typography className={classes.dateSeparator} >
//             {moment(date).calendar(null, {
//               sameDay: "[Today]",
//               lastDay: "[Yesterday]",
//               lastWeek: "dddd",
//               sameElse: "MMMM Do YYYY",
//             })}
//           </Typography>
//           </Box>
         
//           {groupedMessages[date].map((message) => (
//             <Message
//               key={message._id}
//               content={message.content}
//               timestamp={message.createdAt}
//               isSent={message.senderId === currentUserId}
//             />
//           ))}
//         </div>
//       ))}
//       {/* <div ref={chatEndRef} /> */}
//     </div>
//   );
// };

// const ViewMessage = ({ openDrawer, socket }) => {
//   const classes = useStyles();
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);
//   const [chatMessages, setChatMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     if (socket) {
//       socket.on("receive-message", (message) => {
//         setChatMessages((prevMessages) => [...prevMessages, message]);
//       });
//       return () => {
//         socket.off("receive-message");
//       };
//     }
//   }, [socket]);

//   const handleSendMessage = () => {
//     const messageData = {
//       senderId: user.user._id,
//       receiverId:
//         user.user.firstName === "Micheal"
//           ? "65c2d1a9518e8835a1602798"
//           : "667ac178a529d6de449b557f",
//       content: newMessage,
//       messageId: id,
//     };
//     socket.emit("send-message", messageData);
//     setNewMessage("");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosInstance.get(`/api/message/${id}`, {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         });
//         setMessage(res.data);
//         setChatMessages(res.data?.chats);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     if (id !== "create") {
//       fetchData();
//     }
//   }, [id, user.token]);

//   return (
//     <Stack spacing={2}>
//       <Header
//         Icon={MessageIcon}
//         title={"View Message"}
//         openDrawer={openDrawer}
//         button={"Edit Message"}
//         link={`/user/message/${id}`}
//       />

//       {loading ? (
//         <Box
//           sx={{
//             height: "300px",
//             width: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             display: "flex",
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Paper
//           elevation={0}
//           sx={{
//             paddingY: 4,
//             paddingX: 3,
//             borderRadius: 2,
//             bgcolor: message ? "white" : "transparent",
//           }}
//         >
//           <Stack spacing={3}>
//             <Stack>
//               <Typography fontWeight={"600"}>Message ID</Typography>
//               <Typography color={"#788585"}>{message?._id}</Typography>
//             </Stack>
//             <Stack>
//               <Typography fontWeight={"600"}>Message Title</Typography>
//               <Typography color={"#788585"}>{message?.title}</Typography>
//             </Stack>

//             <Stack>
//               <Typography fontWeight={"600"}>Message Content</Typography>
//               <Typography color={"#788585"}>{message?.content}</Typography>
//             </Stack>

//             <Stack
//               direction={{ xs: "column", md: "row" }}
//               flexWrap={"wrap"}
//               gap={2}
//             >
//               {message?.images?.map((img, index) => (
//                 <Box
//                   width={{ xs: "100px", md: "180px" }}
//                   height={{ xs: "100px", md: "180px" }}
//                   key={index}
//                 >
//                   <img
//                     src={img?.url}
//                     alt="prevailagency"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "8px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Stack>
//           </Stack>

//           <Stack sx={{borderRadius: "10px",     border: "1px solid #f1f1f1",
// }}>
//             <Chat messages={chatMessages} currentUserId={user.user._id} />
//             <Box className={classes.inputContainer}>
//               <OutlinedInput
//                 fullWidth
//                 placeholder="Send a message"
//                 multiline
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => {
//                   if (e.key === 'Enter' && !e.shiftKey) {
//                     e.preventDefault();
//                     handleSendMessage();
//                   }
//                 }}
//                 endAdornment={
//                   newMessage.trim().length > 0  && (
//                     <InputAdornment position="end">
//                       <Tooltip title="Send Message">
//                         <IconButton onClick={handleSendMessage} disabled={newMessage.trim() === ""}>
//                           <SendIcon
//                             sx={{
//                               color: "#AEB4BE",
//                               cursor: "pointer",
//                             }}
//                           />
//                         </IconButton>
//                       </Tooltip>
//                     </InputAdornment>
//                   )
//                 }
//                 sx={{
//                   borderRadius: "12px",
//                   paddingRight: 0,
//                   bgcolor: "white",
//                   paddingX: "15px",

//                   "& .MuiInputBase-input": {
//                     fontSize: "15px",
//                   },
//                   "& .MuiOutlinedInput-notchedOutline": {
//                     border: "none",
//                     boxShadow:
//                       "0 0 transparent,0 0 transparent,0 0 15px rgba(0,0,0,.1)",
//                   },
//                 }}
//               />
//             </Box>
//           </Stack>
//         </Paper>
//       )}
//     </Stack>
//   );
// };

// export default ViewMessage;