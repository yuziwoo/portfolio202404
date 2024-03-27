import { PageStyle as S } from './MainPage.styled';
import MainBanner from '../../components/main/MainBanner/MainBanner';
import MainBackground from '../../components/main/MainBackground/MainBackground';
import { useEffect, useState } from 'react';
import { elementClassName } from '../../constants/elementClassName';

const MainPage = () => {
  // className을 elementClassName.BACKGROUND_TRIGGER로 지정하면 해당 태그를 지나가면서 배경의 색을 바꿉니다.
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const changeBackgroundIndex = () => {
      const triggers = document.getElementsByClassName(elementClassName.BACKGROUND_TRIGGER);

      for (let i = triggers.length - 1; i >= 0; i--) {
        const isActive =
          triggers[i].getBoundingClientRect().top + triggers[i].getBoundingClientRect().height / 2 <
          0;
        if (isActive) {
          setBackgroundIndex(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', changeBackgroundIndex);

    return () => {
      window.removeEventListener('scroll', changeBackgroundIndex);
    };
  }, []);
  return (
    <S.Page>
      <MainBackground index={backgroundIndex} />
      <div className={elementClassName.BACKGROUND_TRIGGER}>
        <MainBanner />
      </div>
      <div className={elementClassName.BACKGROUND_TRIGGER} style={{ height: '1000px' }}></div>
      <div className={elementClassName.BACKGROUND_TRIGGER} style={{ height: '1001px' }}></div>
    </S.Page>
  );
};

export default MainPage;
