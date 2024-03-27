import { useRef } from 'react';
import { useScrollTrigger } from '../../../hooks/design/useScrollTrigger';
import { ComponentStyle as S } from './MainTitleLineText.styled';

const MainTitleLineText = () => {
  const titleRef = useRef<null | HTMLDivElement>(null);
  const { isActive } = useScrollTrigger(titleRef);

  return (
    <S.Component>
      <S.Titles ref={titleRef}>
        <S.Title $isActive={isActive}>WEB</S.Title>
        <S.Title $isActive={isActive}>FRONTEND</S.Title>
        <S.Title $isActive={isActive}>GRAPHIC</S.Title>
        <S.Title $isActive={isActive}>ENGINEER</S.Title>
      </S.Titles>
      <S.Text>
        The brand's unique color is delicately melted on a canvas that reveals brand philosophy. It
        helps you inspire and move the brand by capturing its story. It is designed to be used
        efficiently and conveniently, taking into account the user experience, and sometimes it is
        soft like the color of spring and sometimes intensely like waves, reinterpreting it to fit
        the brand's image to create a unique website. I like to talk about development. Feel free to
        contact me anytime.
      </S.Text>
      <S.Text>
        브랜드 철학을 드러내는 캔버스에 브랜드의 고유한 색체를 섬세하게 녹여냅니다. 브랜드의
        이야기를 담아내어 감동과 영감을 선사할 수 있도록 도와드립니다. 사용자 경험을 고려하여
        효율적이고 편리하게 사용할 수 있도록 설계하고, 때로는 봄의 색깔처럼 부드럽고 때로는 파도처럼
        강렬하게 브랜드의 이미지에 맞게 재해석하여 독창적인 웹사이트를 만들어드립니다. 개발에 대한
        이야기를 나누는 걸 좋아합니다. 언제든 편하게 연락주세요.
      </S.Text>
    </S.Component>
  );
};

export default MainTitleLineText;
