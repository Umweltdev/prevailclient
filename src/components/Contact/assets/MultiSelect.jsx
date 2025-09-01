import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { InputLabel, FormControl } from "@mui/material";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "#2D3748"
  };
  font-size: 16px;
  font-weight: 500;
`
);

const Label = styled(InputLabel)`
  color: #64748B;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  position: static;
  transform: none;
  transition: color 0.3s ease;
  
  &.focused {
    color: #6E3EF4;
  }
`;

const InputWrapper = styled("div")(
  () => `
  width: 100%;
  position: relative;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
  border: 2px solid transparent;
  background-clip: padding-box;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 56px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 48px 8px 16px;
  cursor: pointer;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(110, 62, 244, 0.1) 0%, rgba(156, 106, 255, 0.1) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(110, 62, 244, 0.12);
    
    &::before {
      background: linear-gradient(135deg, rgba(110, 62, 244, 0.2) 0%, rgba(156, 106, 255, 0.2) 100%);
    }
  }

  &.focused {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(110, 62, 244, 0.2);
    
    &::before {
      background: linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%);
    }
  }

  & input {
    background-color: transparent;
    color: #2D3748;
    height: 40px;
    box-sizing: border-box;
    padding: 8px 12px;
    width: 0;
    min-width: 120px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    font-size: 16px;
    font-weight: 500;
    
    &::placeholder {
      color: #94A3B8;
      opacity: 1;
    }
  }
`);

const DropdownIcon = styled(ExpandMoreIcon)(
  ({ focused }) => `
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) ${focused ? 'rotate(180deg)' : 'rotate(0deg)'};
  color: ${focused ? '#6E3EF4' : '#94A3B8'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  font-size: 24px;
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  () => `
  display: flex;
  align-items: center;
  height: 32px;
  margin: 4px 8px 4px 0;
  line-height: 30px;
  background: linear-gradient(135deg, #6E3EF4 0%, #9C6AFF 100%);
  color: #ffffff;
  border: none;
  border-radius: 20px;
  box-sizing: content-box;
  padding: 0 12px 0 16px;
  outline: 0;
  overflow: hidden;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(110, 62, 244, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(110, 62, 244, 0.4);
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
  }

  & svg {
    font-size: 16px;
    cursor: pointer;
    padding: 2px;
    margin-left: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
  }
`
);

const Listbox = styled("ul")(
  () => `
  width: 100%;
  margin: 8px 0 0 0;
  padding: 8px;
  list-style: none;
  background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
  overflow: auto;
  max-height: 280px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(110, 62, 244, 0.15), 0 8px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(110, 62, 244, 0.1);
  z-index: 1000;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  & li {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    margin: 2px 0;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    color: #2D3748;
    cursor: pointer;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
      font-size: 18px;
      transition: all 0.2s ease;
    }
  }

  & li[aria-selected='true'] {
    background: linear-gradient(135deg, rgba(110, 62, 244, 0.1) 0%, rgba(156, 106, 255, 0.1) 100%);
    color: #6E3EF4;
    font-weight: 600;
    border: 1px solid rgba(110, 62, 244, 0.2);

    & svg {
      color: #6E3EF4;
      transform: scale(1.1);
    }
  }

  & li.${autocompleteClasses.focused} {
    background: linear-gradient(135deg, rgba(110, 62, 244, 0.05) 0%, rgba(156, 106, 255, 0.05) 100%);
    border: 1px solid rgba(110, 62, 244, 0.15);
    transform: translateX(4px);

    & svg {
      color: #6E3EF4;
    }
  }

  & li:hover {
    background: linear-gradient(135deg, rgba(110, 62, 244, 0.08) 0%, rgba(156, 106, 255, 0.08) 100%);
    transform: translateX(2px);
  }
`
);

const SelectContainer = styled("div")`
  position: relative;
  width: 100%;
`;

export default function MultiSelect({ setSelectedServices }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "enhanced-multiselect",
    defaultValue: [],
    multiple: true,
    options: services,
    getOptionLabel: (option) => option.title,
    onChange: (event, newValue) => {
      setSelectedServices(newValue);
    },
  });

  return (
    <FormControl fullWidth>
      <Root>
        <SelectContainer {...getRootProps()}>
          <Label 
            {...getInputLabelProps()} 
            className={focused ? "focused" : ""}
            shrink
          >
            Which Services Are You Interested In
          </Label>
          <InputWrapper 
            ref={setAnchorEl} 
            className={focused ? "focused" : ""}
          >
            {value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });
              return <StyledTag key={key} {...tagProps} label={option.title} />;
            })}
            <input 
              {...getInputProps()} 
              placeholder={value.length === 0 ? "Select services you need..." : ""}
            />
            <DropdownIcon focused={focused} />
          </InputWrapper>
          
          {groupedOptions.length > 0 && (
            <Listbox {...getListboxProps()}>
              {groupedOptions.map((option, index) => {
                const { key, ...optionProps } = getOptionProps({ option, index });
                return (
                  <li key={key} {...optionProps}>
                    <span>{option.title}</span>
                    <CheckIcon fontSize="small" />
                  </li>
                );
              })}
            </Listbox>
          )}
        </SelectContainer>
      </Root>
    </FormControl>
  );
}

const services = [
  { title: "Brand Identity" },
  { title: "Customer Website Development" },
  { title: "Website Development" },
  { title: "Search Engine Marketing" },
  { title: "Marketing Price Displacement" },
  { title: "Digital Accelerator Bundle" },
  { title: "Campaign Strategy" },
  { title: "Target Ads Strategy" },
];