import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px 18px;
  width: fit-content;
  height: fit-content;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  box-shadow: 0px 0px 16px 4px rgba(17, 17, 17, 0.4);
  @media screen and (min-width: 768px) {
    padding: 40px 28px;
  }
`;

export const CloseBtn = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  stroke: var(--close-btn-color);
  fill: transparent;
`;