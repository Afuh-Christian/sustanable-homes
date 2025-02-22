export   const products = [
    'Capsule House',
    'Apple Cabin',
    'Natural House',
    'Dome House',
    'Model Double',
    'Silence Pods'
  ];


const AboutUsPage = () => {


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Products Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 text-xl font-semibold mb-4">Products</h2>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="bg-white rounded-lg shadow p-6">
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
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* About Us Section */}
          <div className="mb-8">
            <h2 className="text-blue-600 text-2xl font-semibold mb-4">About Us</h2>
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/1200/600"
                alt="Company Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Video Section */}
         
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;