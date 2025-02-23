import {  NavLink } from "react-router-dom";
import { IsActionEvaluate } from "../assets/components/HeaderComponent";
import { ContactComponent } from "../assets/components/ContactComponent";
import { useState } from "react";

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





const AboutUsPage = () => {
  
    const [activeTab, setActiveTab] = useState("introduction");
  
    const scrollToSection = (id) => {
      setActiveTab(id);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  
  
  
  return (
  <div className="max-w-7xl mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Sidebar */}
      <div className="space-y-8">
        {/* Products Section */}
        <CategoryComponent />
      {/* <ContactComponent/> */}
      </div>

      {/* Main Content */}
      <div className="md:col-span-3">
        {/* About Us Section */}
        <div className="mb-8">
          <h2 className="text-blue-600 text-2xl font-semibold mb-4">About Us</h2>
          <div className="relative h-64 md:h-130 w-full overflow-hidden">
            <img
              src="about-us/about (3).png"
              alt="Company Building"
              className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Video Section */}
        <div className="flex space-x-6 border-b-1">
        {[
          { id: "introduction", label: "Introduction" },
          { id: "product-delivery-center", label: "Product Deliver Center" },
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

      <div id="introduction">
      <div className="mt-8 space-y-7 text-gray-700">
        <div className="text-xl font-semibold">Introduction</div>
      <p>
         {"VOLFERDA Industry Limited is a global leading developer of cultural and tourism real estate. We develop advanced cultural and tourism intelligent housing products for global clients. We provide product solutions based on customer requirements from early project planning, mid-term product delivery, to later project operation."}
      </p>

      <p>
        {"Our global headquarters is located in San Diego, Los Angeles, USA. Our product design comes from both China and the United States. American engineers are responsible for collecting global customer requirements and early-stage product development, relying on China's strong supply chain. Chinese engineers are responsible for the specific implementation and mass production of products."}
      </p>

      <p>
        {"Volferda's China headquarters are located in Foshan, China, which is a high-tech enterprise specializing in research, development, and production. Our headquarters in China provides intelligent housing product solutions for our global customers."}      </p>

      <p>
       {" Volferda develops an innovative, high-design, self-contained cabin that uses prefab structural components to reduce disturbance to the site and minimize environmental impact while outfitted with a curated collection of technology and comfort. This offers unique opportunities for guests to commune with nature and wake up to breathtaking views."}
      </p>

      <div className="relative h-64 md:h-130 w-full overflow-hidden">
            <img
              src="about-us/about (2).png"
              alt="Company Building"
              className="w-full h-full object-cover" />
          </div>

          <p>
        Over the past few years, we have provided temporary housing, cultural and tourism hotel development, Airbnb hotels, and popular vacation hotels for global clients. Our services span from early planning, product implementation, and financial services to later operation and management.
      </p>

      <p>
        We have local offices and service outlets in over 30 countries and regions worldwide. With years of technical expertise and industry experience, we specialize in providing high-quality, environmentally friendly, and sustainable mobile home solutions for cultural tourism resorts, boutique residences, public infrastructure, and commercial projects.
      </p>

      <p>
        We pride ourselves not only on being a leader in the industry but also on inspiring more ambitious teams to join the field and work together to drive the development and evolution of mobile homes. In the future, Volferda will continue to explore innovation and bring more amazing mobile home designs to the table.
      </p>
      </div>
      </div>



      <div id="product-delivery-center">
      <div className="mt-8 space-y-7 text-gray-700">
        <div className="text-xl font-semibold">Product Deliver Center</div>
        <p>
{"Volferda's global supply chain is located in Foshan, China. With a 30,000 square meter factory and 200 workers, the company employs an ERP and MES production management execution system, which allows it to produce up to 100 houses per month while reducing lead times to 20-25 days."}      </p>

      <p>
        At present, Volferda has local manufacturing and delivery centers in Baku, Azerbaijan, Istanbul, Türkiye, Riyadh, Saudi Arabia, Moscow, Russia, and St. Petersburg.
      </p>

      <p>
        By 2025, we will have local manufacturing and delivery centers in the United Arab Emirates, Australia, the United States, and Canada.
      </p>

      <div className="relative h-64 md:h-130 w-full overflow-hidden">
            <img
              src="about-us/about (1).png"
              alt="Company Building"
              className="w-full h-full object-cover" />
          </div>

          <p>
        Volferda is committed to providing leading smart homes to global customers. We adhere to the principle of putting customers first and have a deep and detailed understanding of their needs.
      </p>
      </div>
      </div>


      </div>
     

    </div>
  </div>
)};

export default AboutUsPage;