// styles.js
export const cookieConsentStyles = {
  background: "rgba(136, 78, 217, 0.9)",
  height: "35vh",
  width: "100vw",
  display: "flex",
  padding: "20px",
  boxSizing: "border-box",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    display: "block",
    height: "auto",
    width: "90%",
    margin: "0 auto",
  },
};

export const buttonStyle = {
  color: "#884ED9",
  fontSize: "18px",
  width: "144px",
  padding: "10px 0",
  borderRadius: "25px",
  background: "white",
  border: "1px solid rgba(136, 78, 217)",
  margin: "10px",
};

export const declineButtonStyle = {
  color: "white",
  fontSize: "18px",
  width: "144px",
  padding: "10px 0",
  borderRadius: "25px",
  background: "rgba(136, 78, 217, 0.9)",
  border: "1px solid white",
  margin: "10px",
};
