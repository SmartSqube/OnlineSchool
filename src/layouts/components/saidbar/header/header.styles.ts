import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #555;
  cursor: pointer;
`;
export const BlockMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #e0dada;
  border: 2px solid #e3dede;
  border-radius: 4px;
`;
export const UserNameContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 2px;
  &:hover {
    background: lightblue;
  }
`;

export const UserNameLabel = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  &:hover {
    background: lightblue;
  }
`;
export const LabelContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
