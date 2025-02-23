
import './App.css'
import FooterComponent from './assets/components/FooterComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import AboutUsPage from './Pages/AboutUsPage'
import BlogPage from './Pages/BlogPage'
import BlogPostDetailPage from './Pages/BlogPostDetailPage'
import ContactPage from './Pages/ContactPage'
import ErrorPage from './Pages/ErrorPage'
import FactoryPage from './Pages/FactoryPage'
import FAQPage from './Pages/FAQPage'
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
          <Route path='factory' element={<FactoryPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='faq' element={<FAQPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog/:blockName' element={<BlogPostDetailPage />} />
          <Route path='video' element={<VideoPage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='products/:categoryName' element={<ProductPage />} />
          <Route path='products/:categoryName/:productId' element={<ProductDetailePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
