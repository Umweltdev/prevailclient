import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import PropTypes from "prop-types";

export default function SelectableCard({
  id,
  label,
  description,
  icon,
  selected,
  onSelect,
}) {
  SelectableCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.node,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  return (
    <Card
      sx={{
        border: selected ? "2px solid #1976d2" : "1px solid #e0e0e0",
        borderRadius: 3,
        boxShadow: selected ? 4 : 1,
      }}
    >
      <CardActionArea onClick={() => onSelect(id)}>
        <CardContent sx={{ textAlign: "center", p: 3 }}>
          {icon && (
            <Box fontSize={40} color="primary.main" mb={2}>
              {icon}
            </Box>
          )}
          <Typography variant="h6" fontWeight="bold">
            {label}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
