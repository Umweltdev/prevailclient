import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import theme from "../../theme";

export default function BasicCard() {
  return (
    <Card
      sx={{
        maxWidth: "46vw",
        textAlign: "justify",
        borderRadius: "5px 0",
        fontFamily: "1vw",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0)",
        "@media (max-width: 600px)": {
          width: "95vw",
        },
      }}
    >
      <CardContent>
        <Typography variant="body3" fontFamily={theme.typography.fontFamily}>
          Revolutionise your online presencewith our exclusivebundle. The{" "}
          <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
            {" "}
            <span className="span">
              "Digital Accelarator Bundle package"
            </span>{" "}
          </Link>
          This all-encompassing package seamlessly integrates three core
          services- [website Production & Management]. [Brand Identitiy
          package], and [Search Engine Marketing(SEM)]. Prevail's
          <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
            <span className="span">"Digital Accelerator Bundle Package"</span>
          </Link>
          service is not just a bundle of services. it is your strategic gateway
          to cohesive, impactful, and cost effective digital presence. Elevate
          your brand with Prevails integrated solutions.
        </Typography>
      </CardContent>
    </Card>
  );
}
