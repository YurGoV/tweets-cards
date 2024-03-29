import { Route, Routes, Navigate } from 'react-router-dom/dist';

import HomePage from './pages/HomePage';
import TweetsPage from './pages/TweetsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/tweets' element={<TweetsPage />}></Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
