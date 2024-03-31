import styled from 'styled-components';

const Component = styled.div<{ $dir: 'left' | 'right' }>`
  display: flex;
  justify-content: ${({ $dir }) => ($dir === 'left' ? 'flex-start' : 'flex-end')};
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  transition: transform 0.6s ease-out;
`;

export const ComponentStyle = {
  Component,
  Img,
};
