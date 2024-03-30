import { ComponentStyle as S } from './AboutMe.styled';
import TextAppear from '../../design/TextAppear/TextAppear';
import { useScrollPixel } from '../../../hooks/design/useScrollPixel';
import { useRef } from 'react';

const AboutMe = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { pixel } = useScrollPixel(ref);

  return (
    <S.Component ref={ref}>
      <S.SectionLeft>
        <S.Flowers>
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
          />
          <S.IconFlower
            src={`${process.env.PUBLIC_URL}/img/content/icon/icon-flower-w.svg`}
            alt="2D 꽃 아이콘"
          />
        </S.Flowers>
      </S.SectionLeft>

      <S.SectionRight>
        <S.TitleWrap>
          <S.Title>
            <S.HeadingEVERYTHING>
              <TextAppear text="EVERYTHING" isActive={true} />
            </S.HeadingEVERYTHING>
            <S.HeadingYOU>
              <TextAppear text="YOU" isActive={true} />
            </S.HeadingYOU>
          </S.Title>

          <S.Title>
            <S.HeadingIMAGINE>
              <TextAppear text="IMAGINE" isActive={true} />
            </S.HeadingIMAGINE>
          </S.Title>

          <S.Title>
            <S.HeadingFICTION>
              <TextAppear text="FICTION" isActive={true} />
            </S.HeadingFICTION>
            <S.HeadingTO>
              <TextAppear text="To" isActive={true} />
            </S.HeadingTO>
            <S.HeadingREALIZE>
              <TextAppear text="REALIZE" isActive={true} />
            </S.HeadingREALIZE>
          </S.Title>
        </S.TitleWrap>

        <S.ContentWrap>
          <S.Content>
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

          <S.Content>
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
        {pixel}
      </S.SectionRight>
    </S.Component>
  );
};

export default AboutMe;
