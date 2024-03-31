import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 8rem;
  padding: 0 ${theme.padding.DEFAULT};

  & * {
    color: ${theme.color.WHITE};
  }
`;

const floating = keyframes`
from {
  transform: translateY(3%);
}
to {
  transform: translateY(0%);
}`;

const BackgroundRing = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: block;
  animation: ${floating} 6s infinite alternate;

  & img {
    width: 100%;
    display: block;
  }

  @media screen and (max-width: 860px) {
    opacity: 0.3;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 860px) {
    margin-top: 40rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;

  &:nth-child(3) {
    align-self: flex-end;
    padding-top: 20rem;
  }
`;

const titleFont = css`
  display: inline-block;
  font-size: 16rem;
  line-height: 1;
  font-weight: 500;
  overflow: hidden;
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

const TextWrap = styled.div<{ $isActive: boolean }>`
  width: 40rem;
  margin-top: 8rem;
  transition: opacity 0.85s ${theme.transition.EASE_OUT};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};

  @media screen and (max-width: 860px) {
    width: 60%;
    margin-top: 10rem;
    align-self: left;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    margin-top: 40rem;
  }
`;

const textFont = css`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  text-align: left;

  @media screen and (max-width: 1480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1180px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 13px;
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;

const Text1 = styled.p`
  ${textFont};
  text-indent: 80px;
  @media screen and (max-width: 1480px) {
    text-indent: 60px;
  }
  @media screen and (max-width: 1180px) {
    text-indent: 40px;
  }
  @media screen and (max-width: 1080px) {
    text-indent: 30px;
  }
`;

const Text2 = styled.p`
  ${textFont};
  padding-top: 4rem;
  font-style: oblique;

  @media screen and (max-width: 860px) {
    padding-top: 8rem;
  }
`;

const SkillWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  margin-top: 60rem;

  @media screen and (max-width: 1080px) {
    margin-top: 50rem;
  }
  @media screen and (max-width: 860px) {
    margin-top: 36rem;
    display: none;
  }
`;

const Skill = styled.p<{ $isActive: boolean }>`
  font-size: 4.8rem;
  font-weight: 400;
  font-family: ${theme.font.FAMILY_PLAYFAIR_DISPLAY};
  padding-left: 10rem;
  transform: translateY(${({ $isActive }) => ($isActive ? '0' : '120%')});
  transition: transform 0.85s ${theme.transition.EASE_OUT};

  &:first-child {
    padding-left: 0;
  }

  &:nth-child(2) {
    transition-delay: 0.15s;
  }
  &:nth-child(3) {
    transition-delay: 0.3s;
  }
  &:nth-child(4) {
    transition-delay: 0.45s;
  }
  &:nth-child(5) {
    transition-delay: 0.6s;
  }

  @media screen and (max-width: 620px) {
    font-size: 7.2rem;
    padding-left: 4rem;
  }
`;

export const ComponentStyle = {
  Component,
  BackgroundRing,
  TitleWrap,
  Title,
  HeadingEVERYTHING,
  HeadingYOU,
  HeadingIMAGINE,
  HeadingFICTION,
  HeadingTO,
  HeadingREALIZE,
  TextWrap,
  Text1,
  Text2,
  SkillWrap,
  Skill,
};
