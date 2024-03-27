import { ComponentStyle as S } from './MainBackground.styled';

const MainBackground = ({ index }: { index: number }) => {
  return (
    <S.Component>
      <S.Index1 $isActive={index >= 1} />
      <S.Index2 $isActive={index >= 2} />
    </S.Component>
  );
};

export default MainBackground;
