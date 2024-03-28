import { useRef } from 'react';
import { ComponentStyle as S } from './MainShrinkImg.styled';
import { useScrollRatio } from '../../../hooks/design/useScrollRatio';

const MainShrinkImg = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { ratio } = useScrollRatio(ref);

  return (
    <S.Component ref={ref}>
      <S.Object
        style={{
          transform: `rotate(${ratio * 3.6}deg)`,
        }}
      >
        <img
          src="https://yuziwoo.github.io/portfolio202404/img/main/main-object-4.png"
          alt="object img"
        />
      </S.Object>
      <S.Content>
        <S.ImgWrap>
          <S.Img
            src="https://yuziwoo.github.io/portfolio202404/img/main/main-hand-image.jpg"
            alt="hand img"
            style={{
              transform: `translateY(${25 - ratio / 3}%) scale(${1.1 - ratio / 500})`,
              opacity: ratio / 100,
            }}
          />
        </S.ImgWrap>
      </S.Content>
    </S.Component>
  );
};

export default MainShrinkImg;
