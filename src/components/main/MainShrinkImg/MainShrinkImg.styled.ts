import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
  padding-top: 10px;
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
  right: 70%;
  width: 21.875%;
  top: 30%;
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

const Content = styled.div`
  position: relative;
  margin: auto;
  width: 42.4%;

  @media screen and (max-width: 860px) {
    width: 100%;
    padding: 0 ${theme.padding.DEFAULT};
  }
`;

const ImgWrap = styled.div`
  width: 100%;

  overflow: hidden;
  background: black;
`;

const Img = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ${theme.transition.EASE_OUT};
  transform-origin: center top;
`;

export const ComponentStyle = {
  Component,
  Object,
  Content,
  ImgWrap,
  Img,
};
