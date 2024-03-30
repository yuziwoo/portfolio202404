import { Outlet } from 'react-router-dom';
import { AppStyle as S } from './App.styled';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Background from './components/layout/Background/Background';

function App() {
  return (
    <S.App className="App">
      <Header />

      <S.Main>
        <Background />
        <Outlet />
      </S.Main>

      <Footer />
    </S.App>
  );
}

export default App;
