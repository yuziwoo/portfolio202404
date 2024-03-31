import { useRef } from 'react';
import { ComponentStyle as S } from './ScrollHorizontalImg.styled';
import { useScrollRatio } from '../../../hooks/design/useScrollRatio';

interface ScrollHorizontalImgProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
  widthRatio?: number;
  dir?: 'left' | 'right';
}

const ScrollHorizontalImg = ({
  src,
  srcSet,
  sizes,
  alt = '좌우 스크롤 이미지',
  widthRatio = 125,
  dir = 'left',
}: ScrollHorizontalImgProps) => {
  /**
   * 스크롤을 내리는 만큼 좌측으로 움직이는 이미지
   *
   * @params
   * widthRatio: 부모 엘리먼트 대비 이미지의 크기
   */
  const range = Math.floor((1 - 100 / widthRatio) * 100);
  const ref = useRef<null | HTMLDivElement>(null);
  const { ratio } = useScrollRatio(ref);

  return (
    <S.Component ref={ref} $dir={dir}>
      <S.Img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        style={{
          width: `${widthRatio}%`,
          transform: `translateX(${dir === 'left' ? '-' : ''}${(range / 100) * ratio}%)`,
        }}
      />
    </S.Component>
  );
};

export default ScrollHorizontalImg;
