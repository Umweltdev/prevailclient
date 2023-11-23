import {
  Devices,
  DisplaySettings,
  ImportantDevices,
  Phonelink,
} from "@mui/icons-material";

export const ServiceItem = [
  {
    header: "Content Developement",
    icone: (
      <DisplaySettings
        sx={{
          color: "#a242b1",
          fontSize: "3vw",
        }}
      />
    ),
  },
  {
    header: "Website Developement",
    icone: (
      <Devices
        sx={{
          color: "#a242b1",
          fontSize: "3vw",
        }}
      />
    ),
  },
  {
    header: "Website Maintenance",
    icone: (
      <Phonelink
        sx={{
          color: "#a242b1",
          fontSize: "3vw",
        }}
      />
    ),
  },
  {
    header: "Facebook Marketing",
    icone: (
      <ImportantDevices
        sx={{
          color: "#a242b1",
          fontSize: "3vw",
        }}
      />
    ),
  },
];
