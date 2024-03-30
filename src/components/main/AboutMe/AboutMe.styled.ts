import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & * {
    color: ${theme.color.WHITE};
  }
`;

const SectionLeft = styled.div`
  position: sticky;
  left: 0;
  top: 0;
`;

const SectionRight = styled.div``;

const Flowers = styled.div``;

const IconFlower = styled.img``;

const TitleWrap = styled.div``;

const Title = styled.div``;

const HeadingEVERYTHING = styled.h1``;

const HeadingYOU = styled.h1``;

const HeadingIMAGINE = styled.h1``;

const HeadingFICTION = styled.h1``;

const HeadingTO = styled.h1``;

const HeadingREALIZE = styled.h1``;

const ContentWrap = styled.div``;

const Content = styled.div``;

const ContentTitle = styled.h5``;

const ContentValue = styled.div``;

const ContentSubTitle = styled.h6``;

const ContentText = styled.div``;

const ContentLine = styled.div``;

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
