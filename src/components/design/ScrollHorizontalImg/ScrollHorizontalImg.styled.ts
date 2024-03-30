import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  transition: transform 0.3s ${theme.transition.EASE_OUT};
`;

export const ComponentStyle = {
  Component,
  Img,
};
