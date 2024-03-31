import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
  padding-top: 12rem;
  perspective: 300;

  @media screen and (max-width: 860px) {
    margin-top: 16rem;
  }
`;

const BackgroundRing = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: transform 0.6s ease-out;

  & img {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    width: 180%;
    left: -70%;
  }
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 ${theme.padding.DEFAULT};
`;

const Content = styled.div`
  width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:nth-child(2) {
    align-self: flex-start;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
`;

const headingCSS = css`
  font-size: 16rem;
  font-weight: 500;
  overflow: hidden;

  & span {
    padding: 0 0.9rem;
    text-indent: -1.8rem;
  }

  @media screen and (max-width: 860px) {
    font-size: 20rem;

    & span {
      padding: 0 1rem;
      text-indent: -2rem;
    }
  }
`;

const HeadingFASHION = styled.h1`
  ${headingCSS};
  text-align: right;
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};

  @media screen and (max-width: 1280px) {
    text-align: left;
  }
`;

const HeadingECOMMERCE = styled.h1`
  ${headingCSS};
  font-style: oblique;
`;

const Info = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 3rem;

  transition: opacity 0.65s 1s ${theme.transition.EASE_OUT};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const ImgWrap = styled.div`
  overflow: hidden;
  width: 64rem;
  perspective: 300px;
  position: relative;

  @media screen and (max-width: 720px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.6s ease-out;
  position: relative;
`;

const TextWrap = styled.div`
  padding-left: 4rem;
  flex: 1;

  @media screen and (max-width: 860px) {
    padding-left: 18px;
  }

  @media screen and (max-width: 720px) {
    padding-left: 0;
    padding-top: 20px;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & p {
    font-size: 16px;
    line-height: 1.4;
    margin-right: 3rem;
  }

  & p:last-child {
    margin-right: 0;
  }

  & p:nth-child(2) {
    font-style: oblique;
  }

  @media screen and (max-width: 860px) {
    & p {
      font-size: 13px;
      margin-right: 20px;
      font-weight: 600;
    }
    & p:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 720px) {
    flex-wrap: wrap;

    & p {
      font-size: 12px;
      margin-right: 10px;
    }
    & p:last-child {
      margin-right: 0;
    }
  }
`;

const Text = styled.div`
  padding-top: 10px;
  font-size: 16px;
  line-height: 1.4;

  @media screen and (max-width: 860px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Title2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 12rem;

  @media screen and (max-width: 860px) {
    padding-top: 20rem;
  }

  @media screen and (max-width: 720px) {
    padding-top: 40rem;
  }
`;

const HeadingWEB = styled.h1`
  ${headingCSS};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  font-style: oblique;
`;

const HeadingAGENCY = styled.h1`
  ${headingCSS};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  padding-left: 4rem;
`;

const Contact = styled.div``;

const Title3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12rem;

  @media screen and (max-width: 860px) {
    margin-top: 60rem;
  }
`;

const HeadingWOULD = styled.h1`
  ${headingCSS};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  font-style: oblique;
`;

const HeadingYOU = styled.h1`
  ${headingCSS};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  padding-left: 4rem;
`;

const Title4 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SmallText = styled.p<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: 500;
  font-style: oblique;
  padding-right: 3rem;
  padding-bottom: 1.8rem;
  transition: opacity 0.65s 1s ${theme.transition.EASE_OUT};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};

  @media screen and (max-width: 860px) {
    font-size: 10px;
  }
`;

const HeadingBE = styled.h1`
  font-size: 20rem;
  font-weight: 500;
  overflow: hidden;
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  font-style: oblique;

  & span {
    padding: 0 0.9rem;
    text-indent: -1.8rem;
  }

  @media screen and (max-width: 860px) {
    font-size: 26rem;
    & span {
      padding: 0 1rem;
      text-indent: -2rem;
    }
  }
`;

const HeadingNEXT = styled.h1`
  font-size: 20rem;
  font-weight: 500;
  overflow: hidden;
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  padding-left: 4rem;

  & span {
    padding: 0 1rem;
    text-indent: -2rem;
  }

  @media screen and (max-width: 860px) {
    font-size: 26rem;
    & span {
      padding: 0 1rem;
      text-indent: -2rem;
    }
  }
`;

const Box = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const BoxLine = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 1px;
  background: ${theme.color.BLACK};
  transition: transform 1.2s 1s ${theme.transition.EASE_INOUT};
  transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
`;

const BoxLine1 = styled.div<{ $isActive: boolean }>`
  padding: 20px ${theme.padding.DEFAULT};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 860px) {
    padding: 10px ${theme.padding.DEFAULT};
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const BoxText = styled.p`
  font-size: 16px;
  color: ${theme.color.BLACK};
  font-style: oblique;
  font-weight: 500;

  @media screen and (max-width: 860px) {
    font-size: 13px;
    line-height: 1.2;
  }
`;

const BoxTitle = styled.h2`
  font-size: 68px;
  color: ${theme.color.BLACK};
  font-style: oblique;
  font-weight: 500;

  @media screen and (max-width: 860px) {
    font-size: 36px;
  }
  @media screen and (max-width: 720px) {
    padding-top: 20px;
  }
`;

const BoxTitleWrap = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

const BoxLine2 = styled.div`
  padding: 120px ${theme.padding.DEFAULT} 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: 860px) {
    padding: 100px ${theme.padding.DEFAULT} 48px;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px ${theme.padding.DEFAULT} 48px;
  }
`;

const BoxText2 = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${theme.color.BLACK};
  font-style: oblique;
  font-weight: 400;

  @media screen and (max-width: 860px) {
    font-size: 12px;
  }
`;

export const ComponentStyle = {
  Component,
  BackgroundRing,
  History,
  Content,
  Title,
  HeadingFASHION,
  HeadingECOMMERCE,
  Info,
  ImgWrap,
  Img,
  TextWrap,
  SubTitle,
  Text,
  Title2,
  HeadingWEB,
  HeadingAGENCY,
  Contact,
  Title3,
  Title4,
  HeadingWOULD,
  HeadingYOU,
  SmallText,
  HeadingBE,
  HeadingNEXT,
  Box,
  BoxLine,
  BoxLine1,
  BoxText,
  BoxTitle,
  BoxTitleWrap,
  BoxLine2,
  BoxText2,
};
