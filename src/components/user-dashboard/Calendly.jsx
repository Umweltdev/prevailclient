import { useCalendlyEventListener, PopupButton } from "react-calendly";

const Calendly = () => {

     useCalendlyEventListener({
       onProfilePageViewed: () => console.log("onProfilePageViewed"),
       onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
       onEventTypeViewed: () => console.log("onEventTypeViewed"),
       onEventScheduled: (e) => console.log(e.data.payload),
     });
     
  return (
    <PopupButton
      url="https://calendly.com/prevailagency"
      rootElement={document.getElementById("root")}
      text={`Click here to schedule!`}
      styles={{
        color: "#884ed9",
        backgroundColor: "inherit",
        padding: "1vh 0.1vw",
        fontFamily: "Sarabun",
        fontSize: "1.1vw",
        border: "none",
        borderRadius: "5vw",
        cursor: "pointer",
      }}
    />
  );
};

export default Calendly;
