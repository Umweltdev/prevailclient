import PropTypes from "prop-types";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Collapse,
} from "@mui/material";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { LocalOffer } from "@mui/icons-material";
import SelectableCard from "./SelectableCard.jsx";
import { theme } from "../../../../theme.js";


const TrinityPackageCard = ({ option, selected, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SelectableCard
      selected={selected}
      onClick={onClick}
      sx={{
        height: "100%",
        "& .MuiCardContent-root": {
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
        },
      }}
    >
      <Stack spacing={2} height="100%">
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          mb={1}
          sx={{
            "& .MuiChip-root": {
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
            },
          }}
        >
          {option.baseRecommended && (
            <Chip
              label="Recommended"
              size="small"
              sx={{
                bgcolor: "info.main",
                color: "white",
                fontWeight: 600,
              }}
            />
          )}
          {option.bestValue && (
            <Chip
              label="Best Value"
              size="small"
              color="success"
              variant="filled"
              sx={{ fontWeight: 600 }}
            />
          )}
          <Chip
            label={`Save ${option.savings}%`}
            size="small"
            sx={{
              bgcolor: "error.light",
              color: "error.contrastText",
              fontWeight: 600,
            }}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "flex-start" }}
        >
          <Box flexShrink={0}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                textAlign: { xs: "center", sm: "left" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {option.icon}
            </Typography>
          </Box>
          <Stack spacing={1} flex={1} minWidth={0}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "flex-start" }}
              spacing={1}
            >
              <Box flex={1} minWidth={0}>
                <Typography
                  variant="h6"
                  component="h3"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    lineHeight: 1.2,
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {option.name}
                </Typography>
              </Box>
              <Box
                textAlign={{ xs: "left", sm: "right" }}
                flexShrink={0}
                width={{ xs: "100%", sm: "auto" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "error.main",
                    fontWeight: 800,
                    mb: 0.5,
                    fontSize: { xs: "1.5rem", sm: "1.875rem" },
                  }}
                >
                  €{option.betaPrice.toLocaleString()}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    color: "text.disabled",
                    fontWeight: 600,
                  }}
                >
                  €{option.standardPrice.toLocaleString()}
                </Typography>
              </Box>
            </Stack>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.5,
                mb: 1,
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {option.description}
            </Typography>
            {option.benefits && (
              <Stack
                direction="row"
                spacing={0.5}
                flexWrap="wrap"
                useFlexGap
                mb={1}
              >
                {option.benefits.map((benefit) => (
                  <Chip
                    key={benefit}
                    label={benefit}
                    size="small"
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      fontSize: { xs: "0.65rem", sm: "0.75rem" },
                      height: { xs: 20, sm: 24 },
                    }}
                  />
                ))}
              </Stack>
            )}
            {option.includes && (
              <Box mb={1}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  fontWeight={600}
                  sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                >
                  Includes:
                </Typography>
                <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                  {option.includes
                    .slice(0, expanded ? option.includes.length : 3)
                    .map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          bgcolor: "grey.100",
                          fontSize: { xs: "0.65rem", sm: "0.75rem" },
                          height: { xs: 20, sm: 24 },
                        }}
                      />
                    ))}
                  {option.includes.length > 3 && !expanded && (
                    <Button
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(true);
                      }}
                      sx={{
                        minWidth: "auto",
                        p: 0.5,
                        fontSize: { xs: "0.65rem", sm: "0.75rem" },
                      }}
                    >
                      +{option.includes.length - 3} more
                    </Button>
                  )}
                </Stack>
              </Box>
            )}
            {option.features && (
              <Box>
                <Button
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(!expanded);
                  }}
                  endIcon={
                    expanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )
                  }
                  sx={{
                    mb: 1,
                    p: 0,
                    justifyContent: "flex-start",
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  }}
                >
                  {expanded ? "Hide" : "Show"} Features (
                  {option.features.length})
                </Button>

                <Collapse in={expanded}>
                  <List
                    dense
                    sx={{
                      py: 0,
                      maxHeight: { xs: 200, sm: "none" },
                      overflowY: { xs: "auto", sm: "visible" },
                    }}
                  >
                    {option.features.map((feature, idx) => (
                      <ListItem
                        key={idx}
                        disableGutters
                        sx={{
                          py: 0.25,
                          px: 0,
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 20 }}>
                          <Check size={12} color={theme.palette.success.main} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: {
                              lineHeight: 1.4,
                              fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            )}
            {option.savings && (
              <Typography
                variant="body2"
                sx={{
                  color: "success.main",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                <LocalOffer size={14} />
                Save €{option.savings.toLocaleString()} vs individual
              </Typography>
            )}
            {option.note && (
              <Alert
                severity="warning"
                sx={{
                  mt: 1,
                  borderRadius: 2,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  "& .MuiAlert-message": {
                    py: 0,
                  },
                }}
              >
                {option.note}
              </Alert>
            )}
          </Stack>
        </Stack>
      </Stack>
    </SelectableCard>
  );
};

export default TrinityPackageCard;


TrinityPackageCard.propTypes = {
  option: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
