import { css, styled } from "styled-components";

export const VBloc = styled.div<{$proc:number,$width:number}>`
    
    ${(props) => css`
    width:  ${props.$width}%;;
    height: ${props.$proc}%;
  `}
    border: 1px solid #000;
    background-color: green;

`;