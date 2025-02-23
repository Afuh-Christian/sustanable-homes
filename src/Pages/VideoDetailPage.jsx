import {  NavLink, useParams } from "react-router-dom";
import { IsActionEvaluate } from "../assets/components/HeaderComponent";
import { ContactUsComponent } from "./BlogPage";
import videos from "../Data/VideosData.json"
import { useMemo } from "react";
import { YouTubeEmbedAdvanced } from "../assets/components/YouTube";


export   const products = [
  { "to": "/products/capsule-house", "name": "Capsule House" },
  { "to": "/products/apple-cabin", "name": "Apple Cabin" },
  { "to": "/products/natural-house", "name": "Natural House" },
  { "to": "/products/dome-house", "name": "Dome House" },
  { "to": "/products/model-double", "name": "Model Double" },
  { "to": "/products/silence-pods", "name": "Silence Pods" }
];


export function  CategoryComponent () {

  return  <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-blue-600 text-xl font-semibold mb-4">Products</h2>
      <ul className="space-y-3">
        {products.map((product, index) => (
          <li key={index}
            // 
          className="text-gray-700 hover:text-blue-600 cursor-pointer">
             <NavLink
                to={product.to}
                className={(isActive) => IsActionEvaluate(isActive)}
              >
                {product.name}
              </NavLink>
       
          </li>
        ))}
      </ul>
    </div>
  
}





const VideoDetailPage = () => {
  
  const {videoId} = useParams()

const video = useMemo (()=> {
  return videos.find(e => e.to === videoId )
},[videoId])
  
  return (
  <div className="max-w-7xl mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Sidebar */}
      <div className="space-y-8">
        {/* Products Section */}
        <CategoryComponent />
       <ContactUsComponent/>
      </div>

      {/* Main Content */}
      <div className="md:col-span-3">
        {/* About Us Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-center">{video.title}</h2>
          <hr />
          <div className="relative mt-6 h-64 md:h-130 w-full overflow-hidden">
        {
         <YouTubeEmbedAdvanced
         videoId={video?.youtube}
         title={video?.title}
         autoplay={false}
         startAt={30}
         muted={false}
         className="w-full h-full"
       /> 
        }

          </div>
        </div>
      </div>
    
    </div>
  </div>
)};

export default VideoDetailPage;