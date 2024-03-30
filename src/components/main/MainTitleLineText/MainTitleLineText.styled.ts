import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  padding: 200px ${theme.padding.DEFAULT};
  position: relative;

  @media screen and (max-width: 860px) {
    padding: 80px ${theme.padding.DEFAULT};
  }
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h4<{ $isActive: boolean }>`
  font-size: 22px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  line-height: 1.2;
  transform: ${({ $isActive }) =>
    $isActive ? 'translateY(0) skew(0, 0)' : 'translateY(150%) skew(10deg, 10deg)'};
  transition: transform 0.85s ${theme.transition.EASE_INOUT};

  &:nth-child(2) {
    transition-delay: 0.12s;
  }
  &:nth-child(3) {
    transition-delay: 0.24s;
  }
  &:nth-child(4) {
    transition-delay: 0.36s;
  }

  @media screen and (max-width: 1480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
  @media screen and (max-width: 860px) {
    font-size: 16px;
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

const Line = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 1px;
  background: ${theme.color.BLACK};
  margin-top: 10px;
  transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0.5)});
  transition: transform 0.4s ${theme.transition.EASE_INOUT};
`;

const Text = styled.p<{ $isActive: boolean }>`
  font-size: 22px;
  padding-top: 20px;
  font-weight: 400;
  color: ${theme.color.BLACK};
  line-height: 1.2;
  transition: opacity 0.85s ${theme.transition.EASE_INOUT};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};

  &:last-child {
    transition-delay: 0.12s;
  }

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
    padding-top: 10px;
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
  Line,
  Text,
};
