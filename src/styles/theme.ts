import { keyframes } from 'styled-components';

const color = {
  BLACK: '#000',
  WHITE: '#fff',

  SELECTION_BG: '#4B4B4B',
  SELECTION_COLOR: '#FFF',
};

const gradient = {
  TRANSPARENT_WHITE: 'linear-gradient(180deg, transparent, white)',
};

const zIndex = {
  HEADER: 1000,
  FOOTER: 1000,
  MODAL: 2000,
  LOADER: 3000,
};

const animation = {
  FADE_IN: keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`,
  FADE_OUT: keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }`,

  FADE_UP: keyframes`
  0% {
    transform: translateY(15px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }`,

  FADE_RIGHT: keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }`,

  FADE_LEFT: keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }`,

  COME_UP: keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }`,
  GO_DOWN: keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }`,

  ZOOM_IN: keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }`,
  ZOOM_OUT: keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }`,

  CIRCLE_LEFT: keyframes`
  0% {
    transform: rotate(0eg);
  }
  100% {
    transform: rotate(-360deg);
  }`,
  CIRCLE_RIGHT: keyframes`
  0% {
    transform: rotate(0eg);
  }
  100% {
    transform: rotate(360deg);
  }`,

  FLOATING: keyframes`
  from {
    transform: translateY(3%);
  }
  to {
    transform: translateY(-3%);
  }`
};

const lineHeight = {
  BASIC: 1.2,

  NONE: 1,
  SHORT: 1.2,
  NORMAL: 1.4,
};

const font = {
  FAMILY_INTER: `'Inter', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'sans-serif'`,

  SIZE_BASIC: '10px',
};

const padding = {
  DEFAULT: 'var(--padding-default)',
  BODY: '0 var(--padding-default)',
};

const transition = {
  EASE_IN: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
  EASE_OUT: 'cubic-bezier(0.23, 0.98, 0.32, 1)',
  EASE_INOUT: 'cubic-bezier(0.75, 0, 0.15, 1)',
};

export const theme = {
  color,
  gradient,
  zIndex,
  animation,
  lineHeight,
  font,
  padding,
  transition,
} as const;

export type Theme = typeof theme;
