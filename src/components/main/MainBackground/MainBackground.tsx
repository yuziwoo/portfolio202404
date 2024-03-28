import { useEffect, useState } from 'react';
import { ComponentStyle as S } from './MainBackground.styled';
import { elementClassName } from '../../../constants/elementClassName';

const MainBackground = () => {
  // className을 elementClassName.BACKGROUND_TRIGGER로 지정하면 해당 태그를 지나가면서 배경의 색을 바꿉니다.
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const changeBackgroundIndex = () => {
      const triggers = document.getElementsByClassName(elementClassName.BACKGROUND_TRIGGER);

      for (let i = triggers.length - 1; i >= 0; i--) {
        const rect = triggers[i].getBoundingClientRect();
        const isActive = rect.top - window.innerHeight < 0;
        if (isActive) {
          setBackgroundIndex(i);
          break;
        }
      }
    };

    document.documentElement.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, 1600);

    window.addEventListener('scroll', changeBackgroundIndex);

    return () => {
      window.removeEventListener('scroll', changeBackgroundIndex);
    };
  }, []);
  return (
    <S.Component>
      <S.Index1 $isActive={backgroundIndex >= 1} />
      <S.Index2 $isActive={backgroundIndex >= 2} />
    </S.Component>
  );
};

export default MainBackground;
