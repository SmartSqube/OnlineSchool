import { css, styled } from "styled-components";

export const ProgressbarContainer = styled.div`
  min-width: 200px;
  width: 100%;
  border-radius: 4px;
  background: gray;
  padding: 1px;
`;

export const Value = styled.div<{ $value: number; $color: string }>`
  background: lightgreen;
  border-radius: 4px;
  height: 20px;
  ${(props) => css`
    width: ${props.$value}%;
    background: ${props.$color};
  `}
`;

export const Continer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

export const Label = styled.span``;
