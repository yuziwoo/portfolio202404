import { useRef } from 'react';
import { ComponentStyle as S } from './History.styled';
import { useScrollTrigger } from '../../../hooks/design/useScrollTrigger';
import TextAppear from '../../design/TextAppear/TextAppear';
import { useScrollPixel } from '../../../hooks/design/useScrollPixel';
import { useScrollRatio } from '../../../hooks/design/useScrollRatio';

const History = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { pixel } = useScrollPixel(ref);
  const { ratio } = useScrollRatio(ref);

  const contentRef1 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive1 } = useScrollTrigger(contentRef1);
  const contentRef2 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive2 } = useScrollTrigger(contentRef2);
  const contentRef3 = useRef<null | HTMLDivElement>(null);
  const { isActive: isContentActive3 } = useScrollTrigger(contentRef3);

  return (
    <S.Component ref={ref}>
      <S.BackgroundRing
        style={{
          transform: `translate(${-25 + ratio}%, ${pixel * 0.5}px) scale(${ratio / 200 + 0.4})`,
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/img/content/main/3d-ring2.png`} alt="아이콘" />
      </S.BackgroundRing>

      <S.History>
        <S.Content ref={contentRef1}>
          <S.Title>
            <S.HeadingFASHION>
              <TextAppear text="FASHION" isActive={isContentActive1} />
            </S.HeadingFASHION>

            <S.HeadingECOMMERCE>
              <TextAppear text="E-COMMERCE" isActive={isContentActive1} />
            </S.HeadingECOMMERCE>
          </S.Title>
          <S.Info $isActive={isContentActive1}>
            <S.ImgWrap>
              <S.Img
                src={`${process.env.PUBLIC_URL}/img/content/main/history1.jpg`}
                alt="디코드 심볼 이미지"
                style={{ transform: `translate3d(0, 0, ${ratio}px)` }}
              />
            </S.ImgWrap>
            <S.TextWrap>
              <S.SubTitle>
                <p>D.CODE</p>
                <p>WEB PUBLISHER</p>
                <p>2022/04 - 2023/07</p>
              </S.SubTitle>
              <S.Text>
                명품 패션 이커머스 디코드는 다양한 패션 브랜드의 아이템을 이커머스 형식으로
                판매하고, 브랜드와 상품에 이야기를 담아 전달하는 브랜드입니다. 디코드와 함께하며 약
                1,000개 이상의 룩북과 이벤트 페이지를 퍼블리싱하여 다양한 방식의 웹 서비스를
                전개하였습니다. 여러 경험을 쌓고, 좋은 사람들과 많은 추억을 쌓은 뜻깊은
                시간이었습니다.
              </S.Text>
            </S.TextWrap>
          </S.Info>
        </S.Content>

        <S.Content ref={contentRef2}>
          <S.Title2>
            <S.HeadingWEB>
              <TextAppear text="WEB" isActive={isContentActive2} />
            </S.HeadingWEB>
            <S.HeadingAGENCY>
              <TextAppear text="AGENCY" isActive={isContentActive2} />
            </S.HeadingAGENCY>
          </S.Title2>
          <S.Info $isActive={isContentActive2}>
            <S.ImgWrap>
              <S.Img
                src={`${process.env.PUBLIC_URL}/img/content/main/history2.jpg`}
                alt="winko 심볼 이미지"
                style={{ transform: `translate3d(0, 0, ${ratio}px)` }}
              />
            </S.ImgWrap>
            <S.TextWrap>
              <S.SubTitle>
                <p>WINKO COMMUNICATION</p>
                <p>DESIGNER</p>
                <p>2021/07 - 2022/01</p>
              </S.SubTitle>
              <S.Text>
                웹 에이전시 윈코 커뮤니케이션은 클라이언트에게 웹 사이트, 배너와 상세페이지를
                제공하는 회사입니다. 다양한 웹사이트, 배너와 상세페이지를 디자인하며 여러 브랜드의
                색깔을 경험해 볼 수 있었고, 이때의 경험이 지금도 많은 도움이 되고 있습니다.
                웹사이트를 만드는 꿈의 첫걸음을 함께했고, 덕분에 퍼블리싱에 많은 관심이 생겨
                전문적으로 공부를 하게 되었습니다.
              </S.Text>
            </S.TextWrap>
          </S.Info>
        </S.Content>

        <S.Title3 ref={contentRef3}>
          <S.HeadingWOULD>
            <TextAppear text="WOULD" isActive={isContentActive3} />
          </S.HeadingWOULD>
          <S.HeadingYOU>
            <TextAppear text="YOU" isActive={isContentActive3} />
          </S.HeadingYOU>
        </S.Title3>

        <S.Title4>
          <S.SmallText $isActive={isContentActive3}>LET’S WORK TOGETHER!</S.SmallText>
          <S.HeadingBE>
            <TextAppear text="BE" isActive={isContentActive3} />
          </S.HeadingBE>
          <S.HeadingNEXT>
            <TextAppear text="NEXT" isActive={isContentActive3} />
          </S.HeadingNEXT>
        </S.Title4>
      </S.History>

      <S.Contact>
        <S.Box>
          <S.BoxLine $isActive={isContentActive3} />

          <S.BoxLine1 $isActive={isContentActive3}>
            <S.BoxText>
              FRONTEND DEVELOPMENT
              <br />
              PUBLISHING
            </S.BoxText>
            <S.BoxText>SEOUL, KOREA</S.BoxText>
            <S.BoxTitleWrap href="mailto:yuziwoo@naver.com">
              <S.BoxTitle>CONTACT</S.BoxTitle>
              <S.BoxText>yuziwoo@naver.com</S.BoxText>
            </S.BoxTitleWrap>
          </S.BoxLine1>

          <S.BoxLine2>
            <S.BoxText2>THANK YOU FOR SCROLL</S.BoxText2>
            <S.BoxText2>2024 ©YUZIWOO All Right Reserved</S.BoxText2>
          </S.BoxLine2>
        </S.Box>
      </S.Contact>
    </S.Component>
  );
};

export default History;
