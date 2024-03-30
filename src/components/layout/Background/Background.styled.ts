import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div<{ $background: string }>`
  position: fixed;
  z-index: -1;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ $background }) => $background};
  transition: background 0.85s ${theme.transition.EASE_OUT};
`;

export const ComponentStyle = {
  Component,
};
