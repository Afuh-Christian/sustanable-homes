/* eslint-disable react/prop-types */
import { CategoryComponent } from "./AboutUsPage";

export const ContactUsComponent = () => {
  return    <div className="bg-white rounded-lg shadow p-6">
  <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
  <p className="text-gray-700 mb-4">
    Do you still have questions or would you like learn more about ZTHOUSE?
  </p>
  <div className="space-y-2">
    <a href="tel:8618870949983" className="flex items-center text-blue-600 hover:text-blue-800">
      <span className="mr-2">📱</span>
      8618870949983
    </a>
    <a href="tel:+86-18566028140" className="flex items-center text-blue-600 hover:text-blue-800">
      <span className="mr-2">📞</span>
      +86-18566028140
    </a>
    <a href="mailto:info@volferda.com" className="flex items-center text-blue-600 hover:text-blue-800">
      <span className="mr-2">✉️</span>
      info@volferda.com
    </a>
  </div>
</div>
}


const BlogPostDetailPage = () => {


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Products Section */}
          <CategoryComponent />
          <ContactUsComponent />

          {/* Contact Us Section */}
       
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* About Us Section */}
          <div className="mb-8">

          <BlogPostDetail/>
          </div>

          {/* Video Section */}
         
        </div>
      </div>
    </div>
  );
};



















const BlogPostDetail = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-6">
        Volferda space capsule house, with natural wind and scenery
      </h1>

      <div className="flex items-center justify-center text-gray-600 text-sm mb-8">
        <span>Jun 12,2023</span>
        <span className="mx-2">/</span>
        <span>in</span>
        <a href="#" className="text-blue-600 hover:text-blue-800 mx-1">Blog</a>
        <span>/</span>
        <a href="#" className="text-blue-600 hover:text-blue-800 mx-1">VOLFERDA</a>
        <span>|</span>
        <span className="ml-1">Top Capsule Tiny House Manufacturer</span>
      </div>

      <div className="prose max-w-none">
        <p className="text-md mb-6">
          Classmate gathering, wedding and birthday celebration, new product release, family and friends gathering No matter what kind of party activity, it is indispensable that the participants share a sense of private ceremony.
        </p>

        <p className="text-md mb-6">
          More importantly, we can go into the nature, throw away all kinds of labels, integrate into the green mountains, eliminate the distance between people and nature, create happiness and embrace happiness.
        </p>

        <p className="text-md mb-6">
          This is the private Gaoding gathering activity in the Volferda capsule house. Under the witness of nature, every gathering will be full of joy and happiness! In the pure nature and hidden among the green mountains, there is no noise of the city, only the gentle mountain breeze and the gentle water rippling in the heart. No matter what kind of party activities, such as strolling, watching the stars and divining, can relax and relax in the natural beauty.
        </p>

        <div className="my-8">
          <img 
            src="/api/placeholder/1200/600" 
            alt="Volferda capsule house"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <p className="text-md mb-6">
          This is the private Gaoding gathering activity in the Volferda capsule house. Under the witness of nature, every gathering will be full of joy and happiness! In the pure nature and hidden among the green mountains, there is no noise of the city, only the gentle mountain breeze and the gentle water rippling in the heart. No matter what kind of party activities, such as strolling, watching the stars and divining, can relax and relax in the natural beauty.
        </p>
        <p className="text-md mb-6">
          This is the private Gaoding gathering activity in the Volferda capsule house. Under the witness of nature, every gathering will be full of joy and happiness! In the pure nature and hidden among the green mountains, there is no noise of the city, only the gentle mountain breeze and the gentle water rippling in the heart. No matter what kind of party activities, such as strolling, watching the stars and divining, can relax and relax in the natural beauty.
        </p>
      </div>
    </article>
  );
};

















export default BlogPostDetailPage;