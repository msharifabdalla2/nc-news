import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/articles' element={<Articles />} />
        </Routes>
      </div>
    </>
  );
};

export default App
