import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import ArticlePage from './components/ArticlePage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:article_id' element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App
