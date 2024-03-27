import { theme } from './../../../styles/theme';
import styled, { css, keyframes } from 'styled-components';

const Component = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: ${theme.padding.DEFAULT} ${theme.padding.DEFAULT} 0 ${theme.padding.DEFAULT};
`;

const TextWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const animationTextUp = keyframes`
from {
  transform: translateY(160%) skew(10deg, 10deg);
}
to {
  transform: translateY(0) skew(0, 0);
}`;

const TextGraphic = styled.div`
  width: 68.1%;
  display: block;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    transform-origin: center bottom;
    transform: translateY(160%) skew(10deg, 10deg);
    animation: ${animationTextUp} 1.4s 2.25s 1 forwards ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 860px) {
    width: 80%;
  }
`;

const introFont = css`
  font-size: 22px;
  line-height: 1.2;
  padding: 3px 0;
  font-weight: 500;

  @media screen and (max-width: 1480px) {
    font-size: 20px;
    padding: 2px 0;
  }

  @media screen and (max-width: 1080px) {
    font-size: 16px;
    padding: 1px 0;
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
  
  @media screen and (max-width: 680px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const IntroTextWrap = styled.div`
  padding-top: 20px;
  transform: translateX(-100%);
  opacity: 0;
  animation: ${theme.animation.FADE_RIGHT} 1.4s 2.25s 1 forwards ${theme.transition.EASE_OUT};

  @media screen and (max-width: 1480px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 1080px) {
    padding-top: 5px;
  }
`;

const IntroText1 = styled.p`
  ${introFont}
`;

const IntroText2 = styled.p`
  ${introFont};

  & span {
    text-indent: 20px;
    display: inline-block;
    ${introFont};
    padding: 0;
  }

  @media screen and (max-width: 1080px) {
    & span {
      text-indent 12px;
    }
  }
`;

const IntroText3Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const IntroText3 = styled.p`
  ${introFont};
  text-align: right;
`;

const animationArrow = keyframes`
0%, 50% {
  transform: translateX(-80%);
}
90%, 100% {
  transform: translateX(0);
}`;

const Arrow = styled.div`
  width: 133px;
  height: 2px;
  border-radius: 1px;
  background: ${theme.color.BLACK};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-80%);
  animation: ${animationArrow} 3s infinite alternate ${theme.transition.EASE_INOUT};

  &::before,
  &::after {
    display: block;
    content: '';
    background: ${theme.color.BLACK};
    width: 12px;
    height: 2px;
    border-radius: 1px;
    position: absolute;
    right: 1px;
    transform-origin: right center;
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }

  @media screen and (max-width: 1480px) {
    width: 118px;
  }

  @media screen and (max-width: 1080px) {
    width: 86px;

    &::before,
    &::after {
      width: 8px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 54px;
    height: 1px;

    &::before,
    &::after {
      width: 4px;
      height: 1px;
    }
  }
`;

const IntroText4 = styled.p`
  ${introFont};
  text-align: right;
`;

const TextBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: ${theme.padding.DEFAULT};
`;

const TextEngineer = styled.div`
  width: 75.7%;
  display: block;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    transform-origin: center bottom;
    transform: translateY(160%) skew(10deg, 10deg);
    animation: ${animationTextUp} 1.4s 2.5s 1 forwards ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 860px) {
    width: 97%;
  }
`;

const TextDesicription = styled.p`
  ${introFont};
  padding-bottom: 20px;
  text-align: right;
  transform: translateX(100%);
  opacity: 0;
  animation: ${theme.animation.FADE_LEFT} 1.4s 2.5s 1 forwards ${theme.transition.EASE_OUT};

  @media screen and (max-width: 1480px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 1080px) {
    padding-bottom: 5px;
  }
`;

const ObjectWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;

const objectFloating = keyframes`
from {
  transform: translateY(3%) rotate(5deg);
}
to {
  transform: translateY(-3%) rotate(-5deg);
}`;

const Object1 = styled.div`
  position: absolute;
  width: 20.1%;
  top: 2vw;
  right: 1.71875%;
  transition: transform 0.3s ${theme.transition.EASE_OUT};
  opacity: 0;
  animation: ${theme.animation.FADE_IN} 0.8s 2.3s 1 forwards ${theme.transition.EASE_INOUT};

  & img {
    display: block;
    width: 100%;
    transform: translateY(3%) rotate(5deg);
    animation: ${objectFloating} 3s 3s infinite alternate ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 1680px) {
    width: 25%;
    right: -1%;
    top: 3vw;
  }

  @media screen and (max-width: 1480px) {
    width: 30%;
    right: -4%;
    top: 2.5vw;
  }

  @media screen and (max-width: 1180px) {
    width: 36%;
    right: -7%;
    top: 2vw;
  }

  @media screen and (max-width: 860px) {
    width: 40%;
    right: -15%;
    top: 12vw;
  }
`;

const Object2 = styled.div`
  position: absolute;
  width: 21.875%;
  left: -4.583%;
  bottom: 3vw;
  transition: transform 0.3s ${theme.transition.EASE_OUT};
  opacity: 0;
  animation: ${theme.animation.FADE_IN} 0.8s 2.3s 1 forwards ${theme.transition.EASE_INOUT};

  & img {
    display: block;
    width: 100%;
    animation: ${objectFloating} 3s infinite alternate ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 1680px) {
    width: 26%;
    left: -8%;
    bottom: 5vw;
  }

  @media screen and (max-width: 1480px) {
    width: 34%;
    left: -14%;
    bottom: 2vw;
  }

  @media screen and (max-width: 1140px) {
    width: 40%;
    left: -18%;
    bottom: 1vw;
  }

  @media screen and (max-width: 860px) {
    width: 44%;
    left: -18%;
    bottom: 5vw;
  }
`;

const SelfieWrap = styled.div`
  width: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 5;

  @media screen and (max-width: 1680px) {
    width: 26%;
  }
  @media screen and (max-width: 1360px) {
    width: 32%;
  }
  @media screen and (max-width: 1140px) {
    width: 38%;
  }

  @media screen and (max-width: 860px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 65%;
  }
`;

const Selfie = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  transform: rotate(-11deg);
  transition: transform 0.3s;
  opacity: 0;
  animation: ${theme.animation.FADE_IN} 0.8s 2.5s 1 forwards ${theme.transition.EASE_INOUT};
`;

const SelfieImg = styled.img<{ $isActive: boolean }>`
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  animation: ${theme.animation.ZOOM_IN} 10s infinite alternate;

  &:first-child {
    position: relative;
  }
`;

export const ComponentStyle = {
  Component,
  TextWrap,
  TextTop,
  TextGraphic,
  IntroTextWrap,
  IntroText1,
  IntroText2,
  IntroText3Wrap,
  IntroText3,
  Arrow,
  IntroText4,
  TextBottom,
  TextEngineer,
  TextDesicription,
  ObjectWrap,
  Object1,
  Object2,
  SelfieWrap,
  Selfie,
  SelfieImg,
};
