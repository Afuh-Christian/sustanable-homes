import { useState } from "react";

export   const products = [
    'Capsule House',
    'Apple Cabin',
    'Natural House',
    'Dome House',
    'Model Double',
    'Silence Pods'
  ];


const FactoryPage = () => {


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

          <FactoryComponent/>
          </div>

          {/* Video Section */}
         
        </div>
      </div>
    </div>
  );
};





























 function FactoryComponent() {
  const [activeTab, setActiveTab] = useState("factory-tour");

  const scrollToSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full px-6 lg:px-16 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Factory</h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 border-b-2">
        {[
          { id: "factory-tour", label: "Factory Tour" },
          { id: "product-line", label: "Product Line" },
          { id: "sample-room", label: "Sample Room" },
          { id: "r-and-d", label: "R & D" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`pb-2 text-lg ${
              activeTab === tab.id
                ? "text-blue-700 font-semibold border-b-2 border-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="mt-8 space-y-16">
        {/* Factory Tour Section */}
        <section id="factory-tour" className="space-y-6">
          <h2 className="text-2xl font-semibold">Factory Tour</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/capsule-house.jpg"
              alt="Capsule House Workshop"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/images/apple-cabin.jpg"
              alt="Apple Cabin Workshop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-between text-gray-600 text-sm">
            <p>Capsule House Workshop</p>
            <p>Apple Cabin Workshop</p>
          </div>
        </section>

        {/* Product Line Section */}
        <section id="product-line" className="space-y-6">
          <h2 className="text-2xl font-semibold">Product Line</h2>
          <p className="text-gray-700">Details about the product line go here...</p>
        </section>

        {/* Sample Room Section */}
        <section id="sample-room" className="space-y-6">
          <h2 className="text-2xl font-semibold">Sample Room</h2>
          <p className="text-gray-700">Information about sample rooms...</p>
        </section>

        {/* R & D Section */}
        <section id="r-and-d" className="space-y-6">
          <h2 className="text-2xl font-semibold">R & D</h2>
          <p className="text-gray-700">Research and Development insights...</p>
        </section>
      </div>
    </div>
  );
}












export default FactoryPage;