import { theme } from './../../../styles/theme';
import styled, { css, keyframes } from 'styled-components';

const Component = styled.div`
  width: 100%;
  position: relative;
  padding: 0 ${theme.padding.DEFAULT};
`;

const ThreeText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  position: relative;
  transform: translateY(-100%);
  animation: ${theme.animation.COME_DOWN} 0.85s 1.2s 1 forwards ${theme.transition.EASE_INOUT};

  @media screen and (max-width: 1480px) {
    padding: 20px 0;
  }
`;

const ThreeTextText = styled.p`
  font-size: 18px;
  font-style: oblique;
  font-weight: 500;
  position: relative;
  z-index: 1;

  &:nth-child(2) {
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    z-index: 0;
  }

  @media screen and (max-width: 1480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 12px;
  }

  @media screen and (max-width: 400px) {
    &:nth-child(2) {
      position: relative;
      text-algin: right;
      width: auto;
    }
    &:nth-child(3) {
      display: none;
    }
  }
`;

const headingFont = css`
  display: inline-block;
  font-size: 20rem;
  line-height: 1;
  font-weight: 500;
  overflow: hidden;

  @media screen and (max-width: 860px) {
    font-size: 23rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 20rem;
  }
`;

const HeadingWEB = styled.h1`
  ${headingFont};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
`;

const HeadingGRAHIC = styled.h1`
  ${headingFont};
  font-size: 18.5rem;
  padding-left: 4rem;

  @media screen and (max-width: 860px) {
    font-size: 21.5rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 18.5rem;
  }
`;

const HeadingENGINEER = styled.h1`
  ${headingFont};
  font-size: 18.5rem;
  padding-right: 2rem;

  & span {
    padding-right: 1.4rem;
    text-indent: -1.2rem;
  }

  @media screen and (max-width: 860px) {
    & span {
      padding-right: 1.6rem;
      text-indent: -1.4rem;
    }
  }
`;

const HeadingWrap1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const smallTextStyle = css`
  font-size: 16px;
  font-weight: 500;
  font-style: oblique;
  line-height: 1.2;
  opacity: 0;
  animation: ${theme.animation.FADE_IN} 0.65s 1.2s 1 forwards ${theme.transition.EASE_INOUT};

  @media screen and (max-width: 1480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 12px;
  }
`;

const SmallText1 = styled.p`
  ${smallTextStyle};
  padding-bottom: 2.2rem;

  @media screen and (max-width: 860px) {
    padding-bottom: 0;
  }
`;

const SmallText2 = styled.p`
  ${smallTextStyle};
  margin-top: 17rem;
  text-align: right;

  @media screen and (max-width: 860px) {
    margin-top: 60rem;
  }
`;

const HeadingWrap2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

const blueObjectAnimation = keyframes`
from {
  transform: translateX(-100%) scale(1.2)
}
to {
  transform: translateX(0) scale(1);
}
`;

const ImgBlueObject = styled.div<{ $isActive: boolean }>`
  height: 16rem;
  padding-bottom: 1.8rem;
  margin-right: 4rem;
  overflow: hidden;

  & img {
    display: block;
    height: 100%;
    transform-origin: right bottom;
    transform: translateX(-100%) scale(1.2);
    animation: ${blueObjectAnimation} 0.85s 1.2s 1 forwards ${theme.transition.EASE_INOUT};
  }

  @media screen and (max-width: 860px) {
    height: 18.5rem;
  }

  @media screen and (max-width: 280px) {
    height: 16rem;
  }
`;

const HeadingNEATLY = styled.h1`
  ${headingFont};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
`;

const HeadingWrap3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

const HeadingWrap3_1 = styled.div`
  @media screen and (max-width: 860px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const HeadingDESIGNED = styled.h1`
  ${headingFont};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  padding-right: 4rem;

  @media screen and (max-width: 860px) {
    text-align: right;
  }
`;

const IconLight = styled.img`
  width: 10rem;
  animation: ${theme.animation.BLINK} 1.5s infinite alternate;

  @media screen and (max-width: 860px) {
    padding-top: 10px;
    width: 20rem;
    display: none;
  }
`;

export const ComponentStyle = {
  Component,
  ThreeText,
  ThreeTextText,
  HeadingWEB,
  HeadingGRAHIC,
  HeadingENGINEER,
  HeadingWrap1,
  SmallText1,
  SmallText2,
  HeadingWrap2,
  ImgBlueObject,
  HeadingNEATLY,
  HeadingWrap3,
  HeadingWrap3_1,
  HeadingDESIGNED,
  IconLight,
};
