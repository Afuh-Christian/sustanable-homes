import { useState } from "react";
import { CategoryComponent } from "./AboutUsPage";
import { ContactUsComponent } from "./BlogPage";
import { factory } from "../Data/Factory";



const FactoryPage = () => {


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Products Section */}
          <CategoryComponent />
          <ContactUsComponent />
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
            {factory.factoryTour.map(e => ( <div key={e}><img
              src={e}
              alt="factory-tour"
              className="rounded-lg shadow-lg"
            /></div>))}
           
          
          </div>
        </section>

        {/* Product Line Section */}
        <section id="product-line" className="space-y-6">
          <h2 className="text-2xl font-semibold">Product Line</h2>
          <img
              src={"capsule-house/v8/cap2.png"}
              alt="factory-tour"
              className="rounded-lg shadow-lg"
            />
          <p className="text-gray-700">The founder of the company, who has been working in the field of mobile housing for 15 years, has profound thinking and understanding of metal structures, metal
          materials, containers, and security equipment.</p>
        </section>

        {/* Sample Room Section */}
        <section id="sample-room" className="space-y-6">
          <h2 className="text-2xl font-semibold">Sample Room</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factory.singleRoom.map(e => ( <div key={e}><img
              src={e}
             
              alt="Single room"
              className="rounded-lg shadow-lg"
            /></div>))}
          </div>
        </section>

        {/* R & D Section */}
        <section id="r-and-d" className="space-y-6">
          <h2 className="text-2xl font-semibold">R & D</h2>
          <img
              src={"factory/s-r/rd (2).png"}
              alt="factory-tour"
              className="rounded-lg shadow-lg"
            />
          <h4 className="text-red-600">Production workshop</h4>
          <p className="text-gray-600">The founder of the factory, who has been working in the field of mobile housing for 15 years, has profound thinking and understanding of metal
          structures, metal materials, containers, and security equipment.</p>
<img
              src={"factory/s-r/rd (1).png"}
              alt="factory-tour"
              className="rounded-lg shadow-lg"
            />
        </section>
      </div>
    </div>
  );
}












export default FactoryPage;