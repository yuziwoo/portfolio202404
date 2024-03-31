import { ComponentStyle as S } from './AboutMe.styled';
import TextAppear from '../../design/TextAppear/TextAppear';
import { useScrollPixel } from '../../../hooks/design/useScrollPixel';
import { useRef } from 'react';
import { useScrollTrigger } from '../../../hooks/design/useScrollTrigger';

const AboutMe = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { pixel, top } = useScrollPixel(ref);
  const { isActive } = useScrollTrigger(ref);

  const contentRef1 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive1 } = useScrollTrigger(contentRef1);
  const contentRef2 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive2 } = useScrollTrigger(contentRef2);

  return (
    <S.Component ref={ref}>
      <S.SectionLeft>
        <S.Flowers style={{ transform: `translateY(${top * 1.2}px)` }}>
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
            style={{ transform: `rotate(${pixel / 4}deg)` }}
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
            style={{ transform: `rotate(${pixel / 3}deg)` }}
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
            style={{ transform: `rotate(${pixel / 2}deg)` }}
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
            style={{ transform: `rotate(${pixel}deg)` }}
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
            style={{ transform: `rotate(${pixel * 2}deg)` }}
          />
        </S.Flowers>
      </S.SectionLeft>

      <S.SectionRight>
        <S.TitleWrap>
          <S.Title style={{ transform: `translateX(${pixel / 20}px)` }}>
            <S.HeadingEVERYTHING>
              <TextAppear text="EVERYTHING" isActive={isActive} />
            </S.HeadingEVERYTHING>
            <S.HeadingYOU>
              <TextAppear text="YOU" isActive={isActive} />
            </S.HeadingYOU>
          </S.Title>

          <S.Title  style={{ transform: `translateX(${pixel / 10}px)` }}>
            <S.HeadingIMAGINE>
              <TextAppear text="IMAGINE," isActive={isActive} />
            </S.HeadingIMAGINE>
          </S.Title>

          <S.Title  style={{ transform: `translateX(-${pixel / 20}px)` }}>
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

        <S.ContentWrap>
          <S.Content ref={contentRef1} className={`${isContentActive1 ? 'active' : ''}`}>
            <S.ContentTitle>(01) WHAT I DO</S.ContentTitle>
            <S.ContentValue>
              <S.ContentSubTitle>I AM WEB GRAPHIC ENGINEER</S.ContentSubTitle>
              <S.ContentText>
                웹사이트를 깔끔하고 세련되게 담아내어 브랜드를 가장 브랜드답게 표현해 드립니다.
                브랜드에 어울리는 트렌디한 디자인을 만들고, 자연스러운 모션을 입혀 웹사이트를 만들어
                드립니다.
              </S.ContentText>
              <S.ContentText>
                I express the brand the most brand-like way by neatly and sophisticatedly capturing
                the website. It creates a trendy design that matches the brand and creates a website
                by applying natural motion.
              </S.ContentText>

              <S.ContentSubTitle>WORKS</S.ContentSubTitle>
              <S.ContentText>
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
              </S.ContentText>
            </S.ContentValue>
          </S.Content>

          <S.ContentLine />

          <S.Content ref={contentRef2} className={`${isContentActive2 ? 'active' : ''}`}>
            <S.ContentTitle>(02) DEVELOPMENT SKILLS</S.ContentTitle>
            <S.ContentValue>
              <S.ContentSubTitle>FRONTEND</S.ContentSubTitle>
              <S.ContentText>React | Next.js | TypeScript | JavaScript</S.ContentText>
              <S.ContentText>
                Redux | Recoil | Tanstack-query | Axios | Storybook | Jest | Styled-Components |
                Tailwind | Framer-motion | Spline | react-router-dom
              </S.ContentText>

              <S.ContentSubTitle>PUBLISHING</S.ContentSubTitle>
              <S.ContentText>
                Swiper | SASS(SCSS) | jQuery | GSAP | LottieFiles | Canvas
              </S.ContentText>

              <S.ContentSubTitle>DESIGN</S.ContentSubTitle>
              <S.ContentText>Adobe XD | Photoshop | Illustrator | Figma | Spline</S.ContentText>

              <S.ContentSubTitle>BAAS (Backend as a Service)</S.ContentSubTitle>
              <S.ContentText>
                Firebase | AWS | MonghDB | Cloudinary | Netlify | Vercel
              </S.ContentText>

              <S.ContentSubTitle>WORKS</S.ContentSubTitle>
              <S.ContentText>Notion | Github</S.ContentText>
            </S.ContentValue>
          </S.Content>
        </S.ContentWrap>
      </S.SectionRight>
    </S.Component>
  );
};

export default AboutMe;
