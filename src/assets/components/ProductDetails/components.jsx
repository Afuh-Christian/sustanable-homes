/* eslint-disable react/prop-types */


import {  useState } from 'react';
// import products from "../Data/productData.json"


export const ProductDetails = () => {
  return (
    <div className="px-52 mx-auto space-y-8">
      <h1 className="text-2xl font-semibold">Product Details</h1>
     <hr/>
      {/* Details Section */}
      <section>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">1. Details</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Main Struction</h3>
            <p className="text-gray-700">
              Main frame(Galvanized steel frame structure), Shell (aluminum plate), Thermal insulation (polyurethane, extruded panel, Rock wool), Glass curtain wall (8+12A+8 Hollow LOW-E coated tempered glass)
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Interior:</h3>
            <p className="text-gray-700">
              Aluminum exterior panel ceiling &wall, Stone plastic composite floor, Whole house lighting system, Whole house plumbing&electrical system, Entryway cabinet, Curtain track (without curtain)
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Baths:</h3>
            <p className="text-gray-700">
              Aluminum alloy glass door, Premium brand showerhead, Sink Washbasin, bathroom mirror, bathroom floor drain, Faucet, toilet, Bathroom heater, stainless steel hanger.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Utilities</h3>
            <p className="text-gray-700">
              Communal cable, less insulated PVC piping, communal water and pressurized drainage piping, three-hole socket, switch panel/USB panel
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Kitchen (Optional)</h3>
            <p className="text-gray-700">
              Induction Cooker, Range Hood, Cabinet, Bar counter, Sink.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Appliance (optional)</h3>
            <p className="text-gray-700">
              Air conditioner, Electric water heater, refrigerator, washing machine with drying, 4K Projector, Floor heating, Electric curtain
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Furniture (optional)</h3>
            <p className="text-gray-700">
              Sofa, Bed, Coffee table, Lounge Chair
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">2. Delivery</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Delivery place:</h3>
            <p className="text-gray-700">
              Factory located in Foshan, China, the nearest port of delivery is Nansha port in Guangzhou, or Shekou port in Shenzhen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Delivery method:</h3>
            <p className="text-gray-700">
              There are two delivery methods for capsule house, the whole hosue and disassembled modular houses. For the whole house delivery, the house will be shipped in 40 flat rack container due to the wide width of the house up to 3.2m, so the shipping costs are relatively high and suitable for only 1-2 houses. For the disassembled modular houses delivery, the house will be shipped in 40 HQ, which saves shipping cost and is suitable for purchasing large quantity of houses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Installation:</h3>
            <p className="text-gray-700">
              For the whole house delivery, installation is very simple, just need the crane to be placed on the base prepared in advance. For the disassembled modular houses delivery, we will give you the necessary installation drawings and video tutorials to help you install it again locally, of course you need to have some construction experience.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              If you buy a lot of house for your project, we can also arrange for a Volferda engineer to go to the project site to guide the installation, or a local agent to help you with the installation. At present we have agents in Europe, the United States, the Middle East, Australia and other regions.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              For details of delivery methods and shipping costs, you can see this blog: <a href="#" className="text-blue-600 hover:underline">Deliver and cost</a>
            </p>
          </div>

          <div>
            <p className="text-gray-700 italic">
              *we can also support DDP (Door to Door), if you are an individual customer with no experience of importing from China, but you will need to contact our sales manager for detailes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Delivery time:</h3>
            <div className="space-y-2">
              <p className="text-gray-700">Production: 45 days</p>
              <p className="text-gray-700">Delivery time: 20-35 days</p>
            </div>
          </div>

          <p className="text-gray-700 font-semibold">
            Therefore, we can deliver to any country in the world.
          </p>
        </div>
      </section>
      <div className=" mx-auto">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">3. Payment</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">
            Payment methods
          </h3>
          <p className="text-gray-600">
            T/T payment
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">
            Payment procedure
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>50% deposit before producing</li>
            <li>50% balance befor delivery</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};



 export const CapsuleHouseDetail = ({product}) => {
  const [currentImage, setCurrentImage] = useState(0);
  

  const images = [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery Section */}
        <div className="space-y-4">
          <div className="relative">
            <img 
              src={images[currentImage]} 
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
            {images.map((img, idx) => (
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
          <h1 className="text-3xl font-semibold">VOLFERDA Capsule House Model E6</h1>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Beds:</p>
              <p>1 or 2</p>
            </div>
            <div>
              <p className="text-gray-600">Bath:</p>
              <p>1</p>
            </div>
            <div>
              <p className="text-gray-600">Area:</p>
              <p>27.2m²</p>
            </div>
            <div>
              <p className="text-gray-600">LxWxH:</p>
              <p>8.5m x 3.2m x 3.2m</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Standard configuration:</h2>
            <p className="text-gray-700">
              Fine finishing, shower room with artificial stone finish and partition, toilet, sink, smart mirror, 
              sink cabinet, curtain mechanism, thermal insulation, waterproofing, wind protection, smart lock, 
              internal and external lighting, electricity wiring, sewerage, water treatment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Optional configuration:</h2>
            <p className="text-gray-700">
              sofa, coffee table, TV cabinet, double bed, bedside table, refrigerator, TV, kitchen (lower and 
              upper cabinets, sink, artificial stone countertop), hob.
            </p>
          </div>

          <p className="text-gray-600 italic">
            * E6 have 2 floor plans, with balcony or without balcony.
          </p>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Inquire Now
          </button>

          <div className="flex space-x-2">
            <a href="#" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Share</a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Facebook</a>
            <a href="#" className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500">Twitter</a>
            <a href="#" className="bg-red-600 text-white p-2 rounded hover:bg-red-700">Pinterest</a>
            <a href="#" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">WhatsApp</a>
            <a href="#" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Messenger</a>
            <a href="#" className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export const RelatedProducts = () => {
    const products = [
      {
        id: 1,
        name: "VOLFERDA Capsule House Model D8",
        image: "https://example.com/image-d8.jpg",
      },
      {
        id: 2,
        name: "VOLFERDA Capsule House Model E8",
        image: "https://example.com/image-e8.jpg",
      },
    ];
  
    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6">RELATED PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-4 text-lg">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RelatedProducts;