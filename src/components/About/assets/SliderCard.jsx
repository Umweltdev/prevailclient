import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Star } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function SliderCard({ text, header, author, icon }) {
  return (
    <Card
      sx={{
        width: { xs: "90vw", sm: 540 },
        minHeight: { xs: 320, sm: 370 },
        background: "#F9F9F9",
        boxShadow: 3,
        margin: { xs: "10px auto 20px auto", sm: "10px auto 60px auto" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: { xs: "16px", sm: "12px" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          width: "100%",
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
        }}
      >
        {/* Icon */}
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem" },
            fontWeight: 500,
            color: "#000",
          }}
        >
          {icon || <Star sx={{ color: "#FFBE4E", fontSize: "inherit" }} />}
        </Typography>

        {/* Header */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            fontWeight: 600,
            color: "#000",
          }}
        >
          {header}
        </Typography>

        {/* Body text */}
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#505660",
          }}
        >
          {text}
        </Typography>

        {/* Optional Author */}
        {author && (
          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              color: "text.secondary",
              mt: 1,
            }}
          >
            — {author}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

SliderCard.propTypes = {
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  author: PropTypes.string,
  icon: PropTypes.node,
};