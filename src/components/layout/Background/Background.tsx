import { useEffect, useState } from 'react';
import { ComponentStyle as S } from './Background.styled';
import { elementClassName } from '../../../constants/elementClassName';
import { theme } from '../../../styles/theme';

const Background = () => {
  /**
   * 스크롤을 내리다가 ChangeBackground 컴포넌트를 마주치면 배경의 색이 바뀝니다.
   */
  const BACKGROUND_COLORS = ['#FFF', '#000', theme.color.BACKGROUND];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeColor = () => {
      const changer = document.getElementsByClassName(elementClassName.BACKGROUND);

      for (let i = changer.length - 1; i >= 0; i--) {
        if (changer[i].getBoundingClientRect().top - window.innerHeight < 0) {
          setIndex(i);
          break;
        }
      }
    };

    setTimeout(changeColor, 300);
    setTimeout(changeColor, 500);
    setTimeout(changeColor, 700);
    setTimeout(changeColor, 900);
    setTimeout(changeColor, 1100);
    setTimeout(changeColor, 1300);
    setTimeout(changeColor, 1500);
    setTimeout(changeColor, 1700);
    setTimeout(changeColor, 1900);
    setTimeout(changeColor, 2100);
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <S.Component
      $background={BACKGROUND_COLORS[index] ? BACKGROUND_COLORS[index] : BACKGROUND_COLORS[0]}
    ></S.Component>
  );
};

export default Background;
