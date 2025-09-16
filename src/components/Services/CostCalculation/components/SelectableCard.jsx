import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grow,
  Zoom,
} from "@mui/material";
import { Check } from "lucide-react";
const SelectableCard = ({ children, selected, onClick, sx, hover = true }) => (
  <Grow in timeout={300}>
    <Card
      elevation={0}
      sx={{
        cursor: "pointer",
        height: "100%",
        border: "2px solid",
        borderColor: selected ? "primary.main" : "grey.200",
        transform: selected ? "scale(1.02)" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "visible",
        background: selected
          ? "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)"
          : "white",
        "&::before": selected
          ? {
              content: '""',
              position: "absolute",
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
              borderRadius: "inherit",
              zIndex: -1,
            }
          : {},
        "&:hover": hover
          ? {
              transform: "scale(1.02)",
              borderColor: selected ? "primary.main" : "primary.light",
              boxShadow: "0 8px 25px rgba(99, 102, 241, 0.15)",
              "& .card-icon": {
                transform: "scale(1.1)",
              },
            }
          : {},
        ...sx,
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: "100%",
          borderRadius: "inherit",
          "&:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 3,
            position: "relative",
          }}
        >
          {selected && (
            <Zoom in>
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
                }}
              >
                <Check size={16} color="white" />
              </Box>
            </Zoom>
          )}
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  </Grow>
);

export default SelectableCard;


SelectableCard.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.object,
  hover: PropTypes.bool,
};
