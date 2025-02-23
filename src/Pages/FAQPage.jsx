/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryComponent } from "./AboutUsPage";



const FAQPage = () => {


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Products Section */}
          <CategoryComponent />

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

          <VolferdaFAQ/>
          </div>

          {/* Video Section */}
         
        </div>
      </div>
    </div>
  );
};






























import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ({ question, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="prose max-w-none text-gray-600">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const VolferdaFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqItems = [
    {
      question: "How much is the final estimated cost of the Volferda house?",
      answer: (
        <div className="space-y-4">
          <p>The final price includes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>House price: Contact info@volferda.com for price list of different models</li>
            <li>Shipping cost: Available in two options:
              <ul className="list-disc pl-5 mt-2">
                <li>Whole house shipment in 40 FR</li>
                <li>Parts shipment in 40HQ</li>
              </ul>
            </li>
            <li>Duty: Varies by region (HS Code: 9406). Check local import duties on Chinese products</li>
          </ul>
        </div>
      )
    },
    {
      question: "Do I need a permit to put this on my property?",
      answer: (
        <div className="space-y-4">
          <p>Yes, you probably will. We recommend working with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Local municipalities for permits</li>
            <li>A general contractor who can help with:
              <ul className="list-disc pl-5 mt-2">
                <li>Foundation work</li>
                <li>Utility installation</li>
                <li>Permit acquisition</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Installing Utilities",
      answer: (
        <p>
          Plumbing, electricity, and HVAC come pre-installed from the factory. Utilities simply plug in on-site to the exterior of the Guest Home. We recommend having a professional contractor on site for proper installation upon delivery.
        </p>
      )
    },
    {
      question: "Review access to delivery area",
      answer: (
        <div className="space-y-4">
          <p>Delivery requirements:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{"12' wide, relatively straight path from paved road"}</li>
            <li>Clear path without obstacles such as:
              <ul className="list-disc pl-5 mt-2">
                <li>Fences</li>
                <li>Trees and branches</li>
                <li>Playsets</li>
                <li>Underground septic systems</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Damage",
      answer: (
        <div className="space-y-4">
          <p>While the Guest House is fully inspected before leaving our warehouse, damage can occur during transit. Please:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inspect thoroughly before installers leave</li>
            <li>Alert delivery personnel if damage is found</li>
            <li>Take pictures of any damage</li>
            <li>Contact info@volferda.com to report issues</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            isOpen={openItems.has(index)}
            onClick={() => toggleItem(index)}
          >
            {item.answer}
          </FaqItem>
        ))}
      </div>
    </div>
  );
};






export default FAQPage;