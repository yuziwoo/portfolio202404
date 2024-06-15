import TextAppear from '../../design/TextAppear/TextAppear';
import { ComponentStyle as S } from './MainBanner.styled';

const MainBanner = () => {
  return (
    <S.Component>
      <S.ThreeText>
        <S.ThreeTextText>YUZIWOO</S.ThreeTextText>
        <S.ThreeTextText>FRONTEND DEVELOPER</S.ThreeTextText>
        <S.ThreeTextText>INTERACTIVE</S.ThreeTextText>
      </S.ThreeText>

      <S.HeadingWEB>
        <TextAppear text="WEB" isActive={true} />
      </S.HeadingWEB>
      <S.HeadingGRAHIC>
        <TextAppear text="FRONTEND" isActive={true} />
      </S.HeadingGRAHIC>

      <S.HeadingWrap1>
        <S.HeadingENGINEER style={{ fontStyle: 'oblique' }}>
          <TextAppear text="DEVELOPER" isActive={true} />
        </S.HeadingENGINEER>
        <S.SmallText1>
          AN IMAGINATIVE
          <br />
          FRONTEND DEVELOPER
        </S.SmallText1>
      </S.HeadingWrap1>

      <S.SmallText2>SINCE (2020)</S.SmallText2>
      <S.HeadingWrap2>
        <S.ImgBlueObject $isActive={true}>
          <img
            src={`${process.env.PUBLIC_URL}/img/content/main/main-small-1.jpg`}
            alt="파란 오브젝트 이미지"
          />
        </S.ImgBlueObject>
        <S.HeadingNEATLY>
          <TextAppear text="NEATLY" isActive={true} />
        </S.HeadingNEATLY>
      </S.HeadingWrap2>

      <S.HeadingWrap3>
        <S.IconLight
          src={`${process.env.PUBLIC_URL}/img/content/icon/icon-light.svg`}
          alt="2D 빛 아이콘"
        />
        <S.HeadingWrap3_1>
          <S.HeadingDESIGNED>
            <TextAppear text="DESIGNED" isActive={true} />
          </S.HeadingDESIGNED>
          <S.HeadingWEB>
            <TextAppear text="WEB" isActive={true} />
          </S.HeadingWEB>
        </S.HeadingWrap3_1>
      </S.HeadingWrap3>
    </S.Component>
  );
};

export default MainBanner;
