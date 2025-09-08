import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function BasicCard() {
  return (
    <Card
      sx={{
        maxWidth: "49vw",
        textAlign: "justify",
        textJustify: "distribute",
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
        <Typography variant="body3" >
          Revolutionise your online presencewith our exclusivebundle. The{" "}
          <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
            <span className="span">
              &quot;Digital Accelarator Bundle package&quot;
            </span>
          </Link>
          This all-encompassing package seamlessly integrates three core
          services- [website Production & Management]. [Brand Identitiy
          package], and [Search Engine Marketing(SEM)]. Prevail&apos;s
          <Link style={{ textDecoration: "none" }} to={`/digitalaccelerator`}>
            <span className="span">&quot;Digital Accelerator Bundle Package&quot;</span>
          </Link>
          service is not just a bundle of services. it is your strategic gateway
          to cohesive, impactful, and cost effective digital presence. Elevate
          your brand with Prevails integrated solutions.
        </Typography>
      </CardContent>
    </Card>
  );
}
