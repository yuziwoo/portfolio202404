import { ComponentStyle as S } from './TextAppear.styled';

interface TextAppearProps {
  text: string;
  isActive: boolean;
}

const TextAppear = ({ text, isActive }: TextAppearProps) => {
  /**
   * isActive: true가 되면 글자가 하나씩 나타나는 디자인 효과 컴포넌트입니다.
   */

  const textArray = text.split('');

  return (
    <>
      {textArray.map((letter, index) => (
        <S.Span key={index} $isActive={isActive}>
          {letter}
        </S.Span>
      ))}
    </>
  );
};

export default TextAppear;
