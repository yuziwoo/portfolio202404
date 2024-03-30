import { PageStyle as S } from './MainPage.styled';
import MainBanner from '../../components/main/MainBanner/MainBanner';
import ScrollHorizontalImg from '../../components/design/ScrollHorizontalImg/ScrollHorizontalImg';
import AboutMe from '../../components/main/AboutMe/AboutMe';
import ChangeBackground from '../../components/layout/Background/ChangeBackground/ChangeBackground';

const MainPage = () => {
  return (
    <S.Page>
      <ChangeBackground />
      <MainBanner />

      <S.HorizontalImg>
        <ScrollHorizontalImg
          widthRatio={125}
          srcSet={`${process.env.PUBLIC_URL}/img/content/main/main-big-1-mob.jpg 860w, ${process.env.PUBLIC_URL}/img/content/main/main-big-1-pc.jpg`}
          sizes="(max-width: 860px) 860px"
          alt="파란 오브젝트 이미지"
        />
        <ChangeBackground />
      </S.HorizontalImg>

      <AboutMe />

      {/* <MainTitleLineText />
      <MainPixelByPixel /> */}
    </S.Page>
  );
};

export default MainPage;
