import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ btheight }) => {
    switch (btheight) {
      case "lg":
        return css`
          height: 3rem;
          @media (max-width: 768px) {
            height: 2.4063rem;
          }
        `;
      case "md":
        return css`
          height: 2.5rem;
          @media (max-width: 768px) {
            height: 2rem;
          }
        `;
      case "sm":
        return css`
          height: 2rem;
        `;
    }
  }}

  ${({ btstyle }) => {
    switch (btstyle) {
      case "primary":
        return css`
          background: var(--color-primary);
          border: 1.5px solid var(--color-primary);
          color: white;
          font-weight: 500;
          font-size: var(--font-size-title);
          padding-inline: 1.375rem;
          border-radius: 0.25rem;
          width: 100%;

          &:hover {
            background: var(--color-primary-focus);
            border: 1.5px solid var(--color-primary-focus);
          }

          @media (max-width: 768px) {
            font-size: 0.8rem;
          }
        `;

      case "disable":
        return css`
          background: var(--color-grey-1);
          border: 1.5px solid var(--color-grey-1);
          color: white;
          font-weight: 500;
          font-size: 0.875rem;
          padding-inline: 1.375rem;
          border-radius: 0.25rem;
          width: ${({ width }) => (width ? width : "auto")};

          &:hover {
            background: var(--color-grey-2);
            border: 1.5px solid var(--color-grey-2);
          }
        `;

      case "link":
        return css`
          background: ${({ backgroundcolor }) =>
            backgroundcolor ? backgroundcolor : "var(--color-grey-0)"};
          border: 1.5px solid
            ${({ backgroundcolor }) =>
              backgroundcolor ? backgroundcolor : "var(--color-grey-0)"};
          color: var(--color-grey-0);
          font-weight: 600;
          font-size: var(--font-size-paragraph);
          padding-inline: 1rem;
          border-radius: 0.25rem;
          width: ${({ width }) => (width ? width : "auto")};

          &:hover {
            background-color: ${({ hoverbackgroundcolor }) =>
              hoverbackgroundcolor
                ? hoverbackgroundcolor
                : "var(--color-grey-0)"};
            border: 1.5px solid
              ${({ hoverbackgroundcolor }) =>
                hoverbackgroundcolor
                  ? hoverbackgroundcolor
                  : "var(--color-grey-0)"};
          }
        `;

      case "openModal":
        return css`
          background: var(--color-grey-3);
          border: 1.5px solid var(--color-grey-3);
          padding: 0.6875rem;
          border-radius: 0.25rem;

          img {
            height: 0.6563rem;
            width: 0.6563rem;
          }

          &:hover {
            background-color: var(--color-grey-2);
            border: 1.5px solid var(--color-grey-2);
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button`
  ${ButtonStyles};
`;

export const StyledLink = styled(Link)`
  ${ButtonStyles};
`;
