import { StyledLabel, StyledParagraph } from "../../styles/typography.js";
import { StyledBox } from "../../styles/container";
import { StyledSelect } from "./style.js";
import { forwardRef } from "react";

export const Select = forwardRef(
  ({ label, placeholder, error, children, ...rest }, ref) => {
    return (
      <StyledBox>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledSelect
          ref={ref}
          placeholder={placeholder}
          {...rest}
          error={error ? true : false}
        >
          {children}
        </StyledSelect>
        {error ? <StyledParagraph>{error.message}</StyledParagraph> : null}
      </StyledBox>
    );
  });
