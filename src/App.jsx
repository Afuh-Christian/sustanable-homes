
import './App.css'
import FooterComponent from './assets/components/FooterComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import AboutUsPage from './Pages/AboutUsPage'
import ContactPage from './Pages/ContactPage'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import ProductDetailePage from './Pages/ProductDetailePage'
import ProductPage from './Pages/ProductPage'
import VideoPage from './Pages/VideoPage'


import {  Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const SharedLayout = () => {
  return (
    <section className='section'>
     <HeaderComponent/>
      <div className='px-36 py-8'><Outlet /></div>
      <FooterComponent/>
    </section>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedLayout />}>
          <Route index element={<ProductPage />} />
          {/* <Route index element={<HomePage />} /> */}
          <Route path='about' element={<AboutUsPage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='contacts' element={<ContactPage />} />
          <Route path='video' element={<VideoPage />} />
          <Route path='products/:productId' element={<ProductDetailePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
