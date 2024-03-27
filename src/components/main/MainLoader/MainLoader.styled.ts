import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const backgroundAnimation = keyframes`
from {
  opacity: 1;
  transform: translateY(0);
}
95% {
  opacity: 0;
  transform: translateY(0);
}
100% {
  opacity: 0;
  transform: translateY(-150vh);
}`;

const Component = styled.div`
  position: fixed;
  z-index: ${theme.zIndex.LOADER};
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #e9f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${backgroundAnimation} 1s 1.2s 1 forwards;
`;

const textAnimation = keyframes`
0% {
  transform: translateY(100%);
}
100% {
  transform: translateY(0);
}
`;

const Text = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    color: black;
    transform: translateY(100%);
    animation-name: ${textAnimation};
    animation-iteration-count: 1;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  & h1:nth-child(2) {
    animation-delay: 0.08s;
  }
  & h1:nth-child(3) {
    animation-delay: 0.16s;
  }
  & h1:nth-child(4) {
    animation-delay: 0.24s;
  }
  & h1:nth-child(5) {
    animation-delay: 0.32s;
  }
  & h1:nth-child(6) {
    animation-delay: 0.4s;
  }
  & h1:nth-child(7) {
    animation-delay: 0.48s;
  }
  & h1:nth-child(8) {
    animation-delay: 0.56s;
  }
`;

export const ComponentStyle = {
  Component,
  Text,
};
