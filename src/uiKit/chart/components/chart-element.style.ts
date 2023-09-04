import { css, styled } from "styled-components";

export const VBloc = styled.div<{ $proc: number; $width: number }>`
  ${(props) => css`
    width: ${props.$width}%;
    height: ${props.$proc}%;
  `}
  border: 2px solid #6e6e6e;
  background-color: #6bd676;
  border-radius: 4px;
`;
