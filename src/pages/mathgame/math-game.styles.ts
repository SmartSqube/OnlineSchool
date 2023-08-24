import { css, styled } from "styled-components";

export const MathGamec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const MathGameContainer = styled.div<{
  $color: string;
}>`
  padding: 32px;
  border-radius: 16px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${(props) => css`
    border: 2px solid ${props.$color};
  `}
`;
