
import './App.css'
import FooterComponent from './assets/components/FooterComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import AboutUsPage from './Pages/AboutUsPage'
import ContactPage from './Pages/ContactPage'
import ErrorPage from './Pages/ErrorPage'
import FactoryPage from './Pages/FactoryPage'
import HomePage from './Pages/HomePage'
import ProductDetailePage from './Pages/ProductDetailePage'
import ProductPage from './Pages/ProductPage'
import VideoPage from './Pages/VideoPage'


import {  Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const SharedLayout = () => {
  return (
    <section>
     <HeaderComponent/>
      <div className=''><Outlet /></div>
      <FooterComponent/>
    </section>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedLayout />}>
          {/* <Route index element={<ProductPage />} /> */}
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutUsPage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='factory' element={<FactoryPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='video' element={<VideoPage />} />
          <Route path='products/:categoryName/:productId' element={<ProductDetailePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
