import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  padding: 200px ${theme.padding.DEFAULT};

  @media screen and (max-width: 860px) {
    padding: 80px ${theme.padding.DEFAULT};
  }
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.BLACK};
  padding-bottom: 10px;
`;

const titleAnimation1 = keyframes`
from {
  opacity: 0;
  transform: translateY(15px) skew(10deg, 10deg);
}
to {
  opacity: 1;
  transform: translateY(0) skew(0, 0);
}`;

const Title = styled.h4<{ $isActive: boolean }>`
  font-size: 22px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  line-height: 1.2;
  opacity: 0;
  animation-name: ${({ $isActive }) => ($isActive ? titleAnimation1 : '')};
  animation-iteration-count: 1;
  animation-duration: 0.85s;
  animation-fill-mode: forwards;
  animation-timing-function: ${theme.transition.EASE_INOUT};

  &:nth-child(2) {
    animation-delay: 0.12s;
  }
  &:nth-child(3) {
    animation-delay: 0.24s;
  }
  &:nth-child(4) {
    animation-delay: 0.36s;
  }

  @media screen and (max-width: 1480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
  @media screen and (max-width: 860px) {
    font-size: 16px;
    font-weight: 600;
  }
  @media screen and (max-width: 680px) {
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 11px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;

const Text = styled.p`
  font-size: 22px;
  padding-top: 20px;
  font-weight: 400;
  color: ${theme.color.BLACK};
  line-height: 1.2;

  @media screen and (max-width: 1480px) {
    font-size: 20px;
    padding-top: 18px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 18px;
    padding-top: 16px;
  }
  @media screen and (max-width: 860px) {
    font-size: 16px;
    padding-top: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
  @media screen and (max-width: 680px) {
    font-size: 14px;
  }
`;

export const ComponentStyle = {
  Component,
  Titles,
  Title,
  Text,
};
