import { useEffect, useRef, useState } from 'react';
import { ComponentStyle as S } from './MainBanner.styled';
import { useObserver } from '../../../hooks/design/useObserver';

const MainBanner = () => {
  const selfieArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const componentRef = useRef<null | HTMLDivElement>(null);

  const { ratio, viewHeight } = useObserver(componentRef);
  const [activeSelfieIndex, setActiveSelfieIndex] = useState(0);

  useEffect(() => {
    const newActiveIndex = Math.floor((viewHeight % 1000) / 100);
    setActiveSelfieIndex(newActiveIndex === 0 ? 1 : 10 - newActiveIndex);
  }, [viewHeight]);

  return (
    <S.Component ref={componentRef}>
      <S.TextWrap>
        <S.TextTop>
          <S.TextGraphic>
            <img
              src="https://yuziwoo.github.io/portfolio202404/img/main/main-title1.svg"
              alt="text GRAPHIC"
            />
          </S.TextGraphic>
          <S.IntroTextWrap>
            <S.IntroText1>WEB DESIGN/PUBLISHER SINCE 2020</S.IntroText1>
            <S.IntroText2>
              #FRONTEND<span>30</span>
            </S.IntroText2>
            <S.IntroText3Wrap>
              <S.Arrow />
              <S.IntroText3>SEOUL KOREA</S.IntroText3>
            </S.IntroText3Wrap>
            <S.IntroText4>THE COLOR I LOVED</S.IntroText4>
          </S.IntroTextWrap>
        </S.TextTop>

        <S.TextBottom>
          <S.TextDesicription>
            WEB GRAPHIC ENGINEER
            <br />
            DEVELOP FRONTEND SPLENDIDLY
          </S.TextDesicription>
          <S.TextEngineer>
            <img
              src="https://yuziwoo.github.io/portfolio202404/img/main/main-title2.svg"
              alt="text ENGINEER"
            />
          </S.TextEngineer>
        </S.TextBottom>
      </S.TextWrap>

      <S.ObjectWrap>
        <S.Object1
          style={{ transform: `rotate(${-ratio * 360}deg) translateY(${10 - ratio * 10}%)` }}
        >
          <img
            src="https://yuziwoo.github.io/portfolio202404/img/main/main-object-1.png"
            alt="object img"
          />
        </S.Object1>

        <S.Object2
          style={{ transform: `rotate(${-ratio * 360}deg) translateY(${10 - ratio * 10}%)` }}
        >
          <img
            src="https://yuziwoo.github.io/portfolio202404/img/main/main-object-2.png"
            alt="object img"
          />
        </S.Object2>
      </S.ObjectWrap>

      <S.SelfieWrap>
        <S.Selfie>
          {selfieArray.map((num) => (
            <S.SelfieImg
              key={num}
              $isActive={num === activeSelfieIndex}
              src={`https://yuziwoo.github.io/portfolio202404/img/main/main-selfie-${num}.jpg`}
              alt="프로필 이미지"
            />
          ))}
        </S.Selfie>
      </S.SelfieWrap>
    </S.Component>
  );
};

export default MainBanner;
