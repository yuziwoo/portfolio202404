import { PageStyle as S } from './MainPage.styled';
import MainBanner from '../../components/main/MainBanner/MainBanner';
import MainTitleLineText from '../../components/main/MainTitleLineText/MainTitleLineText';
import MainPixelByPixel from '../../components/main/MainPixelByPixel/MainPixelByPixel';
import MainShrinkImg from '../../components/main/MainShrinkImg/MainShrinkImg';

const MainPage = () => {
  return (
    <S.Page>
      <MainBanner />
      
      <MainTitleLineText />
      <MainPixelByPixel />

      <MainShrinkImg />
    </S.Page>
  );
};

export default MainPage;
