// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom/dist';

import HomePage from './pages/HomePage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          </Route>
      </Routes>
    </>
  );
}

export default App
