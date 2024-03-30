import { theme } from './../../../styles/theme';
import styled, { keyframes } from 'styled-components';

const textAnimation = keyframes`
from {
  transform: translateY(120%) skew(-30deg, 30deg) rotateX(90deg);
  opacity: 0;
}
to {
  transform: translateY(0) skew(0, 0) rotateX(0deg);
  opacity: 1;
}
`;

const Span = styled.span<{ $isActive: boolean }>`
  display: inline-block;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  transform: translateY(120%) skew(10deg, 10deg);
  transform-origin: center bottom;
  opacity: 0;
  animation-name: ${({ $isActive }) => ($isActive ? textAnimation : '')};
  animation-duration: 1s;
  animation-timing-function: ${theme.transition.EASE_INOUT};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  &:nth-child(2) {
    animation-delay: 0.08s;
  }
  &:nth-child(3) {
    animation-delay: 0.16s;
  }
  &:nth-child(4) {
    animation-delay: 0.24s;
  }
  &:nth-child(5) {
    animation-delay: 0.32s;
  }
  &:nth-child(6) {
    animation-delay: 0.4s;
  }
  &:nth-child(7) {
    animation-delay: 0.48s;
  }
  &:nth-child(8) {
    animation-delay: 0.56s;
  }
  &:nth-child(9) {
    animation-delay: 0.64s;
  }
  &:nth-child(10) {
    animation-delay: 0.72s;
  }
  &:nth-child(11) {
    animation-delay: 0.8s;
  }
  &:nth-child(12) {
    animation-delay: 0.88s;
  }
  &:nth-child(13) {
    animation-delay: 0.96s;
  }
  &:nth-child(14) {
    animation-delay: 1.04s;
  }
  &:nth-child(15) {
    animation-delay: 1.12s;
  }
  &:nth-child(16) {
    animation-delay: 1.2s;
  }
  &:nth-child(17) {
    animation-delay: 1.28s;
  }
  &:nth-child(18) {
    animation-delay: 1.36s;
  }
  &:nth-child(19) {
    animation-delay: 1.44s;
  }
  &:nth-child(20) {
    animation-delay: 1.52s;
  }
`;

export const ComponentStyle = {
  Span,
};
