import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: 0 ${theme.padding.DEFAULT};
  margin-top: 30rem;

  & * {
    color: ${theme.color.WHITE};
  }

  @media screen and (max-width: 860px) {
    margin-top: 80px;
  }
`;

const Years = styled.p`
  font-size: 16px;
  text-align: right;
  line-height: 1.4;
  font-weight: 500;
  font-style: oblique;
  padding-bottom: 20px;

  @media screen and (max-width: 1360px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 13px;
  }

  @media screen and (max-width: 860px) {
    font-size: 12px;
    padding-bottom: 8px;
  }
`;

const Project = styled.div`
  border-top: 1px solid ${theme.color.WHITE};
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: 1px solid ${theme.color.WHITE};
  }

  @media screen and (max-width: 1360px) {
    padding: 40px 0;
  }

  @media screen and (max-width: 860px) {
    padding: 20px 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: auto;
  }
`;

const Info = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: auto;
    width: 100%;
  }
`;

const NumAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (max-width: 860px) {
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Num = styled.p`
  font-size: 48px;
  font-weight: 500;
  font-style: oblique;
  line-height: 1;

  @media screen and (max-width: 1360px) {
    font-size: 32px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;

const Date = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: oblique;
  line-height: 1;
  padding-left: 80px;

  @media screen and (max-width: 1360px) {
    font-size: 14px;
    padding-left: 60px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 13px;
    padding-left: 30px;
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
    padding-left: 0;
  }
`;

const hoverAnimation1 = keyframes`
from{
  transform: translateY(0);
  opacity: 1;
}
to {
  transform: translateY(-100%);
  opacity: 0;
}`;

const hoverAnimation2 = keyframes`
from{
  transform: translateY(0);
  opacity: 0;
}
to {
  transform: translateY(-100%);
  opacity: 1;
}`;

const Title = styled.a`
  padding: 0 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: block;

  & h1 {
    font-size: 48px;
    font-weight: 500;
    font-style: oblique;
    line-height: 1;
    display: block;
  }

  & h1:last-child {
    position: absolute;
    left: 20px;
    top: 100%;
  }

  ${Project}:hover & h1:nth-child(1) {
    animation: ${hoverAnimation1} 0.5s 1 forwards ${theme.transition.EASE_OUT};
  }

  ${Project}:hover & h1:nth-child(2) {
    animation: ${hoverAnimation2} 0.5s 1 forwards ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 1360px) {
    padding: 0 16px;

    & h1 {
      font-size: 32px;
    }

    & h1:last-child {
      left: 16px;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 0 12px;

    & h1 {
      font-size: 24px;
    }

    & h1:last-child {
      left: 12px;
    }
  }

  @media screen and (max-width: 860px) {
    padding: 0 0;
    margin-top: 20px;
    width: 100%;
    text-align: left;

    & h1 {
      font-size: 20px;
    }

    & h1:last-child {
      left: 0px;
    }
  }
`;

const Site = styled.div`
  @media screen and (max-width: 860px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 60px;
  }
`;

const Anchor = styled.a`
  margin-left: 30px;
  overflow: hidden;
  position: relative;
  display: inline-block;

  & p {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    display: block;
    display: block;
  }

  & p:first-child {
    margin-left: 0;
  }

  & p:last-child {
    position: absolute;
    left: 0;
    top: 100%;
  }

  &:hover p:nth-child(1) {
    animation: ${hoverAnimation1} 0.5s 1 forwards ${theme.transition.EASE_OUT};
  }
  &:hover p:nth-child(2) {
    animation: ${hoverAnimation2} 0.5s 1 forwards ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 1360px) {
    margin-left: 24px;

    & p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1000px) {
    & p {
      font-size: 14px;
      margin-left: 20px;
    }

    & p:first-child {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 860px) {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const ComponentStyle = {
  Component,
  Years,
  Project,
  Info,
  NumAndDate,
  Num,
  Date,
  Title,
  Site,
  Anchor,
};
