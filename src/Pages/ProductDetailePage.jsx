import { useNavigate, useParams } from "react-router-dom";
import  {  ProductDetails } from "../assets/components/ProductDetails/components"
import products from "../Data/productData.json"
import { useMemo, useState } from "react";
import { 
  Plus,
  Facebook,
  Twitter,
  Share2,
  MessageCircle,
  MessagesSquare,
  Mail
} from 'lucide-react';
import {YouTubeEmbedAdvanced } from "../assets/components/YouTube"
import InquiryForm from "../assets/components/InquiryForm";
import { ResponsiveTable } from "../assets/components/productsComponents";


function ProductDetailePage() {
  const { productId , categoryName } = useParams();
  const navigate = useNavigate()

  const product = useMemo(()=>{
    return products.find(e => e.to === productId)
  } , [productId])



  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.header.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.header.images.length) % product.header.images.length);
  };

  return (<>
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery Section */}
        <div className="space-y-4">
          <div className="relative">
            <img 
              src={product.header.images[currentImage]} 
              alt="Capsule House" 
              className="w-full h-96 object-cover rounded-lg"
            />
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              →
            </button>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto">
            {product.header.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`h-20 w-20 object-cover cursor-pointer rounded ${
                  currentImage === idx ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">{product.header.title}</h1>
          
         {product?.header?.props &&  <div className="grid grid-cols-2 gap-4">
            {product.header.props.map(e => (  <div key = {e}>
              <span className="font-semibold">{e.label + " : " }</span>
              <span>{e.value}</span>
              </div>))}
          </div>
          }
      {product?.header?.html && <div
    dangerouslySetInnerHTML={{__html : product.header.html}}
      >
        </div>}

        {product?.header?.propsAlter?.map(e => (<div key = {e}>
              <div className="font-semibold text-blue-500">{e.label + " : " }</div>
              {e.value?.map(el => <div className="py-1" key={el}>{el}</div>)}
              </div>))}

        {product?.header?.config && product?.header?.config.map(e => (
            <div key={e}>
            <h2 className="text-xl font-semibold mb-2">{e.label}</h2>
            {e.value.startsWith("<") ? 
            <div
            className=" space-y-3 text-md"
            dangerouslySetInnerHTML={{ __html: e.value }}
            ></div>
          : 
          <p className="text-gray-700  text-md">
          {e.value}
        </p>
          }
         
          </div>
        ))}

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Inquire Now
          </button>

          <SocialIcons/>
        </div>
      </div>
    </div>
   <div className="flex flex-col space-y-4 py-7"
   >
   


   </div>
   {product?.product_details === true && <ProductDetails/> } 

   {product?.product_table?.length > 0 && 
   
   


<div className="px-52">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <tbody>
          {product.product_table?.map((user, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="py-3 px-4 border border-gray-300">{user.label}</td>
              <td className="py-3 px-4 border border-gray-300">{user.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



} 

   {product?.product_details_table && ResponsiveTable(product?.product_details_table) } 



<div className="p-8 px-52">  
{product?.designImages?.map(e => <img
                key={e}
                src={e}
                alt={"No design image"}
                className="w-full object-cover rounded-lg"
              /> )}
  </div>



   {
   product?.youTube?.map(e =>  <YouTubeEmbedAdvanced
   key = {e}
    videoId={e}
    title={product.header.title}
    autoplay={false}
    startAt={30}
    muted={false}
    className="my-8 px-52"
  /> )
   }

   <div className="p-8 px-52">   <InquiryForm product={product}/></div>

   {/* <RelatedProducts/> */}
   <div className="p-8 px-52">
        <h2 className="text-xl font-semibold mb-6">RELATED PRODUCTS</h2>
        <div className="flex flex-row gap-2 ">
          {products.filter(e =>  e.parent === "/products/" + categoryName && e.to !== product.to).map((product) => (
            <div key={product}
            onClick={() => {navigate(`${product.parent}/${product.to}`)}}
            className="text-center w-70">
              <img
                src={product.header.image}
                alt={product.header.title}
                className="w-full  object-cover rounded-lg"
              />
              <p className="mt-4 text-lg">{product.header.title}</p>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}



const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      {/* Share/Plus Icon */}
      <div className="bg-blue-600 p-2 rounded cursor-pointer">
        <Plus className="w-6 h-6 text-white" />
      </div>

      {/* Facebook */}
      <div className="bg-blue-600 p-2 rounded cursor-pointer">
        <Facebook className="w-6 h-6 text-white" />
      </div>

      {/* Twitter */}
      <div className="bg-blue-400 p-2 rounded cursor-pointer">
        <Twitter className="w-6 h-6 text-white" />
      </div>

      {/* Pinterest */}
      <div className="bg-red-600 p-2 rounded cursor-pointer">
        <Share2 className="w-6 h-6 text-white" />
      </div>

      {/* WhatsApp */}
      <div className="bg-green-500 p-2 rounded cursor-pointer">
        <MessageCircle className="w-6 h-6 text-white" />
      </div>

      {/* Messenger */}
      <div className="bg-blue-500 p-2 rounded cursor-pointer">
        <MessagesSquare className="w-6 h-6 text-white" />
      </div>

      {/* Email */}
      <div className="bg-gray-500 p-2 rounded cursor-pointer">
        <Mail className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};


export default ProductDetailePage