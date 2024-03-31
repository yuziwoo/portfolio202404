import { ComponentStyle as S } from './AboutMe.styled';
import TextAppear from '../../design/TextAppear/TextAppear';
import { useScrollPixel } from '../../../hooks/design/useScrollPixel';
import { useRef } from 'react';
import { useScrollTrigger } from '../../../hooks/design/useScrollTrigger';

const AboutMe = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { pixel } = useScrollPixel(ref);
  const { isActive } = useScrollTrigger(ref);

  const contentRef1 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive1 } = useScrollTrigger(contentRef1);
  const contentRef2 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive2 } = useScrollTrigger(contentRef2);

  return (
    <S.Component ref={ref}>
      <S.BackgroundRing>
        <img src={`${process.env.PUBLIC_URL}/img/content/main/3d-ring.png`} alt="3D 오브젝트" />
      </S.BackgroundRing>

      <S.TitleWrap>
        <S.Title style={{ transform: `translateX(${pixel / 8}px)` }}>
          <S.HeadingEVERYTHING>
            <TextAppear text="EVERYTHING" isActive={isActive} />
          </S.HeadingEVERYTHING>
          <S.HeadingYOU>
            <TextAppear text="YOU" isActive={isActive} />
          </S.HeadingYOU>
        </S.Title>

        <S.Title style={{ transform: `translateX(${pixel / 16}px)` }}>
          <S.HeadingIMAGINE>
            <TextAppear text="IMAGINE." isActive={isActive} />
          </S.HeadingIMAGINE>
        </S.Title>

        <S.Title style={{ transform: `translateX(-${pixel / 24}px)` }}>
          <S.HeadingFICTION>
            <TextAppear text="FICTION" isActive={isActive} />
          </S.HeadingFICTION>
          <S.HeadingTO>
            <TextAppear text="TO" isActive={isActive} />
          </S.HeadingTO>
          <S.HeadingREALIZE>
            <TextAppear text="REALIZE" isActive={isActive} />
          </S.HeadingREALIZE>
        </S.Title>
      </S.TitleWrap>

      <S.TextWrap ref={contentRef1} $isActive={isContentActive1}>
        <S.Text1>
          웹사이트를 깔끔하고 세련되게 담아내어 브랜드를 가장 브랜드답게 표현해 드립니다. 브랜드에
          어울리는 트렌디한 디자인을 만들고, 자연스러운 모션을 입혀 웹사이트를 만들어 드립니다.
        </S.Text1>
        <S.Text2>
          - WEB PUBLISHING (⭐️)
          <br />
          - FRONT-END DEVELOPMENT
          <br />
          - INTERACTIVE DEVELOPMENT
          <br />
          - WEB ACCESSIBILITY
          <br />
          - UI/UX STRATEGY
          <br />
          - WEB DESIGN
          <br />- BACKEND SERVICE BASIC
        </S.Text2>
      </S.TextWrap>

      <S.SkillWrap ref={contentRef2}>
        <S.Skill $isActive={isContentActive2}>REACT</S.Skill>
        <S.Skill $isActive={isContentActive2}>NEXT.JS</S.Skill>
        <S.Skill $isActive={isContentActive2}>TYPESCRIPT</S.Skill>
        <S.Skill $isActive={isContentActive2}>JAVASCRIPT</S.Skill>
        <S.Skill $isActive={isContentActive2}>CANVAS</S.Skill>
      </S.SkillWrap>
    </S.Component>
  );
};

export default AboutMe;
