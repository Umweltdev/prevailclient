import { useCalendlyEventListener, PopupButton } from "react-calendly";

const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  // calendly token;
  // eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzE5ODM4MDAwLCJqdGkiOiI4OGRiOGVkNC05OTMyLTRkYjQtYmJiYi00NjZiMzAzOGY4OTYiLCJ1c2VyX3V1aWQiOiJlMzg1NmQxZC1kMzg1LTRhZGEtYTA1YS03YmFmZDhhOTBhMTAifQ.RJy5brf3Fdl9uT8ucHhBu3m268QQBzYkG8N71dr4jU9Avyw-G8go8JTcgH05ZIOfzPpcjBiCTej8unGG8uWYhA

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
