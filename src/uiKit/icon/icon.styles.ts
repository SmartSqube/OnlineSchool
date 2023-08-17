import { css, styled } from "styled-components";

export const IconContiner = styled.span<{color:string}>`
  height:24px;
  width:24px;

  ${({color}) => css`
    svg {
      color: ${color};
    }
  `}
  
`;

