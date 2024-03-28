import { PageStyle as S } from './MainPage.styled';
import MainBanner from '../../components/main/MainBanner/MainBanner';
import MainBackground from '../../components/main/MainBackground/MainBackground';
import MainLoader from '../../components/main/MainLoader/MainLoader';
import MainTitleLineText from '../../components/main/MainTitleLineText/MainTitleLineText';
import MainPixelByPixel from '../../components/main/MainPixelByPixel/MainPixelByPixel';
import MainShrinkImg from '../../components/main/MainShrinkImg/MainShrinkImg';
import MainBackgroundTrigger from '../../components/main/MainBackgroundTrigger/MainBackgroundTrigger';

const MainPage = () => {
  return (
    <S.Page>
      <MainLoader />
      <MainBackground />

      <MainBackgroundTrigger />
      <MainBanner />
      <MainTitleLineText />
      <MainPixelByPixel />

      <MainShrinkImg />
      <MainBackgroundTrigger />

      <div style={{ height: '1001px', marginTop: '1000px' }}>
        <MainBackgroundTrigger />
      </div>
    </S.Page>
  );
};

export default MainPage;
