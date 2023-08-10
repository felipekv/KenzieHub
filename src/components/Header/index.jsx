import { StyledHeader } from "./style";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { StyledImage } from "../../styles/logo";
import { StyledContainer } from "../../styles/container";

export const Header = ({
  justify,
  onClick,
  to,
  btheight,
  btstyle,
  backgroundcolor,
  hoverbackgroundcolor,
  src,
  alt,
  height,
  width,
  mobileheight,
  mobilewidth,
  text,
  maxWidth,
  padding,
  paddingmobile,
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      paddingmobile={paddingmobile}
    >
      <StyledHeader justify={justify}>
        <StyledImage
          src={src}
          alt={alt}
          height={height}
          width={width}
          mobileheight={mobileheight}
          mobilewidth={mobilewidth}
        />
        {onClick ? (
          <StyledButton
            onClick={onClick}
            btheight={btheight}
            btstyle={btstyle}
            backgroundcolor={backgroundcolor}
            hoverbackgroundcolor={hoverbackgroundcolor}
          >
            {text}
          </StyledButton>
        ) : (
          null
        )}
        {to ? (
          <StyledLink
            to={to}
            btheight={btheight}
            btstyle={btstyle}
            backgroundcolor={backgroundcolor}
            hoverbackgroundcolor={hoverbackgroundcolor}
          >
            {text}
          </StyledLink>
        ) : (
          null
        )}
      </StyledHeader>
    </StyledContainer>
  );
};
