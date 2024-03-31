import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const HorizontalImg = styled.div`
  padding: 0 ${theme.padding.DEFAULT};
  margin-top: 4rem;
  opacity: 0;
  animation: ${theme.animation.FADE_UP} 0.8s 1.2s 1 forwards ${theme.transition.EASE_INOUT};
  position: relative;
`;

const HorizontalImg2 = styled.div`
  padding: 0 ${theme.padding.DEFAULT};
  margin-top: 32rem;
  opacity: 0;
  animation: ${theme.animation.FADE_UP} 0.8s 1.2s 1 forwards ${theme.transition.EASE_INOUT};
  position: relative;
`;

export const PageStyle = {
  Page,
  HorizontalImg,
  HorizontalImg2
};
