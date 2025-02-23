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


const BlogPage = () => {


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

          <VolferdaBlog/>
          </div>

          {/* Video Section */}
         
        </div>
      </div>
    </div>
  );
};




























const BlogPost = ({ title, date, description, imageUrl }) => (
  <div className="flex flex-col md:flex-row gap-6 mb-12">
    <div className="md:w-1/3">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
    </div>
    <div className="md:w-2/3">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-gray-500 mb-3">
        {date}
      </p>
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      <a 
        href="#" 
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Read More
      </a>
    </div>
  </div>
);

const VolferdaBlog = () => {
  const blogPosts = [
    {
      title: "Volferda space capsule house, with natural wind and scenery",
      date: "2023-06-12",
      description: "Classmate gathering, wedding and birthday celebration, new product release, family and friends gathering No matter what kind of party act...",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Volferda space capsule house, with natural wind and scenery",
      date: "2023-06-12",
      description: "Classmate gathering, wedding and birthday celebration, new product release, family and friends gathering No matter what kind of party act...",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Best Camping Companion:Volferda Apple Cabin Tiny House",
      date: "2023-06-12",
      description: "Residing within the Apple Cabin Tiny House offers an all-encompassing view of the night sky, thanks to its full transparency. ...",
      imageUrl: "/api/placeholder/800/600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            date={post.date}
            description={post.description}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};











export default BlogPage;