import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  background-color: #c1f2ff;
  background-image: url('https://yuziwoo.github.io/portfolio202404/img/main/main-gradient.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const Index1 = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  background: ${theme.color.WHITE};
`;

const Index2 = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  background: ${theme.color.BLACK};
`;

export const ComponentStyle = {
  Component,
  Index1,
  Index2,
};
