import { useRef } from 'react';
import { ComponentStyle as S } from './MainPixelByPixel.styled';
import { useScrollRatio } from '../../../hooks/design/useScrollRatio';

const MainPixelByPixel = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { ratio } = useScrollRatio(ref);

  return (
    <S.Component ref={ref}>
      <S.Object
        style={{
          transform: `rotate(${-ratio * 3.6}deg)`,
        }}
      >
        <img
          src="https://yuziwoo.github.io/portfolio202404/img/main/main-object-3.png"
          alt="object img"
        />
      </S.Object>
      <S.TextWrap>
        <S.Text
          style={{
            transform: `translateX(${ratio / 4 - 25}%)`,
          }}
          $isScrolling={ratio <= 95}
        >
          PIXEL
        </S.Text>
        <S.Text
          style={{
            transform: `translateX(${ratio / 10 - 10}%)`,
          }}
          $isScrolling={ratio <= 95}
        >
          BY
        </S.Text>
        <S.Text
          style={{
            transform: `translateX(${25 - ratio / 4}%)`,
          }}
          $isScrolling={ratio <= 95}
        >
          PIXEL
        </S.Text>
      </S.TextWrap>
    </S.Component>
  );
};

export default MainPixelByPixel;
