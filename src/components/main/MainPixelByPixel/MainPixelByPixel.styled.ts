import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
  margin-top: 10vh;
`;

const objectFloating = keyframes`
from {
  transform: rotate(-3deg);
}
to {
  transform: rotate(3deg);
}`;

const Object = styled.div`
  position: absolute;
  left: 70%;
  width: 21.875%;
  top: -5%;
  transition: transform 0.3s ${theme.transition.EASE_OUT};

  & img {
    width: 100%;
    display: block;
    animation: ${objectFloating} 3s infinite alternate ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 1680px) {
    width: 26%;
  }

  @media screen and (max-width: 1480px) {
    width: 34%;
  }

  @media screen and (max-width: 1140px) {
    width: 40%;
  }

  @media screen and (max-width: 860px) {
    width: 44%;
  }
`;

const TextWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1<{ $isScrolling: boolean }>`
  width: 100%;
  text-align: center;
  font-weight: 500;
  color: ${theme.color.BLACK};
  font-size: 9.8vw;
  line-height: 0.8;
  transition: transform 0.3s ease-out;
  will-change: ${({ $isScrolling }) => ($isScrolling ? 'transform' : 'auto')};

  &:nth-child(2) {
    font-style: italic;
  }

  @media screen and (max-width: 860px) {
    font-size: 16vw;
    transition: transform 0.05s ease-out;
  }
`;

export const ComponentStyle = {
  Component,
  Object,
  TextWrap,
  Text,
};
