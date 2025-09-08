import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { InputLabel, FormControl, Popper } from "@mui/material";

const Root = styled("div")`
  color: #2d3748;
  font-size: 16px;
`;

const Label = styled(InputLabel)`
  color: #64748b;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  position: static;
  transform: none;
  transition: color 0.3s ease;
  &.focused {
    color: #6e3ef4;
  }
`;

const InputWrapper = styled("div")`
  width: 100%;
  position: relative;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
  border: 2px solid transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 48px 8px 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(110, 62, 244, 0.12);
  }

  &.focused {
    box-shadow: 0 12px 32px rgba(110, 62, 244, 0.2);
    border-color: rgba(110, 62, 244, 0.4);
  }

  & input {
    background-color: transparent;
    color: #2d3748;
    height: 40px;
    padding: 8px 12px;
    width: 0;
    min-width: 120px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    font-size: 16px;
  }
`;

const DropdownIcon = styled(ExpandMoreIcon)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) rotate(${(props) => (props.focused ? 180 : 0)}deg);
  color: ${(props) => (props.focused ? "#6E3EF4" : "#94A3B8")};
  transition: transform 0.3s ease;
`;

const StyledTag = styled("div")`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 4px 8px 4px 0;
  background: linear-gradient(135deg, #6e3ef4 0%, #9c6aff 100%);
  color: #ffffff;
  border-radius: 20px;
  padding: 0 12px 0 16px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(110, 62, 244, 0.3);

  & span {
    white-space: nowrap;
  }

  & svg {
    font-size: 16px;
    cursor: pointer;
    margin-left: 8px;
  }
`;

const Listbox = styled("ul")`
  width: 100%;
  margin: 8px 0 0 0;
  padding: 8px;
  list-style: none;
  background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
  overflow: auto;
  max-height: 280px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(110, 62, 244, 0.15);
  border: 1px solid rgba(110, 62, 244, 0.1);

  & li {
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
      margin-left: 12px;
    }
  }

  & li[aria-selected="true"] {
    background: rgba(110, 62, 244, 0.1);
    color: #6e3ef4;
    font-weight: 600;

    & svg {
      color: #6e3ef4;
    }
  }

  & li:hover,
  & li[data-focused="true"] {
    background: rgba(110, 62, 244, 0.08);
  }
`;

const SelectContainer = styled("div")`
  position: relative;
  width: 100%;
`;

// ✅ 2. Create a filter instance outside the component for performance
const filter = createFilterOptions();

// --- Main Component ---
export default function MultiSelect({
  options,
  label,
  placeholder,
  onChange,
  value,
}) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    setAnchorEl,
    anchorEl,
  } = useAutocomplete({
    id: "custom-multiselect",
    multiple: true,
    options: options,
    value: value,
    getOptionLabel: (option) => option.title,
    onChange: (event, newValue) => {
      onChange(newValue);
    },
    // ✅ 3. Add the custom filterOptions function to prevent duplicates
    filterOptions: (options, state) => {
      const filtered = filter(options, state);
      const selectedTitles = new Set(value.map((v) => v.title));
      return filtered.filter((option) => !selectedTitles.has(option.title));
    },
  });

  return (
    <FormControl fullWidth>
      <Root>
        <SelectContainer {...getRootProps()}>
          <Label {...getInputLabelProps()} className={focused ? "focused" : ""}>
            {label}
          </Label>
          <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
            {value.map((option, index) => (
              <StyledTag key={option.title} {...getTagProps({ index })}>
                <span>{option.title}</span>
                <CloseIcon onClick={getTagProps({ index }).onDelete} />
              </StyledTag>
            ))}
            <input
              {...getInputProps()}
              placeholder={value.length === 0 ? placeholder : ""}
            />
            <DropdownIcon focused={focused} />
          </InputWrapper>
        </SelectContainer>

        <Popper
          open={!!anchorEl && groupedOptions.length > 0}
          anchorEl={anchorEl}
          style={{ width: anchorEl?.clientWidth, zIndex: 1300 }}
          placement="bottom-start"
        >
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li key={option.title} {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        </Popper>
      </Root>
    </FormControl>
  );
}

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

MultiSelect.defaultProps = {
  label: "Select Options",
  placeholder: "Select...",
};
