import { StyledLabel, StyledParagraph } from "../../styles/typography.js";
import { StyledInput } from "./style.js";
import { StyledBox } from "../../styles/container.js";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, placeholder, type, error, ...rest }, ref) => {
    return (
      <StyledBox>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledInput
          type={type}
          ref={ref}
          {...rest}
          error={error ? true : false}
          placeholder={placeholder}
        />
        {error ? (
          <StyledParagraph color="var(--color-negative)">
            {error.message}
          </StyledParagraph>
        ) : null}
      </StyledBox>
    );
  }
);
