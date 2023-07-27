import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import MainPage from './pages/MainPage/MainPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import TopBar from './pages/TopBar/TopBar';

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/history'} element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
