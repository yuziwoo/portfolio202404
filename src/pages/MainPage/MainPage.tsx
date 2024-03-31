import { PageStyle as S } from './MainPage.styled';
import MainBanner from '../../components/main/MainBanner/MainBanner';
import ScrollHorizontalImg from '../../components/design/ScrollHorizontalImg/ScrollHorizontalImg';
import AboutMe from '../../components/main/AboutMe/AboutMe';
import ChangeBackground from '../../components/layout/Background/ChangeBackground/ChangeBackground';
import Projects from '../../components/main/Projects/Projects';
import History from '../../components/main/History/History';

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
      <Projects />

      <S.HorizontalImg2>
        <ScrollHorizontalImg
          widthRatio={125}
          srcSet={`${process.env.PUBLIC_URL}/img/content/main/main-big-2-mob.jpg 860w, ${process.env.PUBLIC_URL}/img/content/main/main-big-2-pc.jpg`}
          sizes="(max-width: 860px) 860px"
          alt="파란 오브젝트 이미지"
          dir="right"
        />
        <ChangeBackground />
      </S.HorizontalImg2>
      <ChangeBackground />
      
      <History />
    </S.Page>
  );
};

export default MainPage;
