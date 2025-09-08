import { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Box,
  Chip,
} from "@mui/material";

const services = [
  "Brand Identity",
  "Custom Website & Management",
  "Website Development & Management",
  "Search Engine Marketing (SEM)",
  "Marketing Price Displacement (MPD)",
  "Digital Accelerator",
];

export default function MultipleSelect({ name }) {
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel id="services-label">
        Which Services Are You Interested In
      </InputLabel>
      <Select
        labelId="services-label"
        id="services-select"
        multiple
        name={name}
        value={selected}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="Which Services Are You Interested In"
          />
        }
        IconComponent={() => null}
        renderValue={(selectedItems) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selectedItems.map((value) => (
              <Chip
                key={value}
                label={value}
                sx={{ backgroundColor: "#6E3EF4", color: "#fff" }}
              />
            ))}
          </Box>
        )}
      >
        {services.map((service) => (
          <MenuItem key={service} value={service}>
            {service}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

MultipleSelect.propTypes = {
  name: PropTypes.string.isRequired,
};
