import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const activeColor = '#FFF';

const Component = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 ${theme.padding.DEFAULT};
  margin-top: 10rem;
  overflow: hidden;

  & * {
    color: ${theme.color.WHITE};
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    margin-top: 8rem;
  }
`;

const SectionLeft = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  width: 42%;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const SectionRight = styled.div`
  width: 58%;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const Flowers = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4rem;

  @media screen and (max-width: 1080px) {
    width: 100%;
    justify-content: space-between;
    padding: 6rem;
    transform: none !important;

    &::after {
      position: absolute;
      left: 0;
      bottom: 100%;
      content: '';
      background: #000;
      display: block;
      width: 100%;
      height: 1000%;
    }
  }
`;

const IconFlower = styled.img`
  display: block;
  width: 7rem;
  margin-right: 4rem;

  @media screen and (max-width: 1080px) {
    width: 10rem;
    margin-right: 6rem;
  }
`;

const TitleWrap = styled.div`
  display: block;

  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 12rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1080px) {
    &:nth-child(3) {
      align-self: flex-end;
      padding-top: 16rem;
    }
  }
`;

const titleFont = css`
  display: inline-block;
  font-size: 10rem;
  line-height: 1;
  font-weight: 500;
  overflow: hidden;

  @media screen and (max-width: 1080px) {
    font-size: 16rem;
  }
`;

const HeadingEVERYTHING = styled.h1`
  ${titleFont};
`;

const HeadingYOU = styled.h1`
  ${titleFont};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  transform: translateY(-0.7rem);
  margin-left: 3rem;

  @media screen and (max-width: 1080px) {
    margin-left: 5rem;
  }
`;

const HeadingIMAGINE = styled.h1`
  ${titleFont};
  font-style: oblique;

  & span {
    padding: 0 1.2rem;
    text-indent: -1.6rem;
    color: ${activeColor};
  }
`;

const HeadingFICTION = styled.h1`
  ${titleFont};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  transform: translateY(-0.7rem);
`;

const HeadingTO = styled.h1`
  ${titleFont};
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  transform: translateY(-0.7rem);
  margin-left: 3rem;

  @media screen and (max-width: 1080px) {
    margin-left: 5rem;
  }
`;

const HeadingREALIZE = styled.h1`
  ${titleFont};
  margin-left: 3rem;

  @media screen and (max-width: 1080px) {
    margin-left: 5rem;
  }
`;

const ContentWrap = styled.div`
  padding-top: 14rem;

  @media screen and (max-width: 1080px) {
    padding-top: 80px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ContentTitle = styled.h5`
  width: 48rem;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
  transition: all 0.85s;
  transform: translateY(15px);
  opacity: 0;
  color: ${activeColor};

  .active & {
    transform: translateY(0);
    opacity: 1;
  }

  @media screen and (max-width: 1080px) {
    font-size: 18px;
    width: auto;
    position: relative;
    display: inline-block;
    transform: translateY(0);
    opacity: 0;

    .active & {
      transform: translateY(0);
      opacity: 1;
    }

    &::after {
      content: '';
      position: absolute;
      left: calc(100% + 20px);
      top: 50%;
      transform: translateY(-0.5px);
      background: ${theme.color.WHITE};
      width: 100vw;
      height: 1px;
      font-size: 8px;
    }
  }
`;

const ContentValue = styled.div`
  width: 48rem;

  @media screen and (max-width: 1080px) {
    width: 100%;
    padding-top: 30px;
  }
`;

const ContentText = styled.p<{ $align?: string }>`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  margin-top: 10px;
  transition: all 0.85s 0.4s;
  transform: translateY(15px);
  opacity: 0;

  .active & {
    transform: translateY(0);
    opacity: 1;
  }

  @media screen and (max-width: 1080px) {
    font-size: 16px;
    text-align: ${({ $align }) => ($align ? $align : 'left')};
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;

const ContentSubTitle = styled.h6<{ $align?: string }>`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
  font-style: oblique;
  margin-top: 50px;
  transition: all 0.85s 0.2s;
  transform: translateY(15px);
  opacity: 0;
  color: #9f9f9f;

  .active & {
    transform: translateY(0);
    opacity: 1;
  }

  &:first-child {
    margin-top: 0;
  }

  & + ${ContentText} {
    margin-top: 20px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 16px;
    margin-top: 24px;
    text-align: ${({ $align }) => ($align ? $align : 'left')};

    &:first-child {
      margin-top: 10px;
    }

    & + ${ContentText} {
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;

const ContentLine = styled.div`
  margin: 120px 0;

  @media screen and (max-width: 1080px) {
    margin: 80px 0;
  }
`;

export const ComponentStyle = {
  Component,
  SectionLeft,
  SectionRight,
  TitleWrap,
  Flowers,
  IconFlower,
  Title,
  HeadingEVERYTHING,
  HeadingYOU,
  HeadingIMAGINE,
  HeadingFICTION,
  HeadingTO,
  HeadingREALIZE,
  ContentWrap,
  Content,
  ContentTitle,
  ContentValue,
  ContentSubTitle,
  ContentText,
  ContentLine,
};
