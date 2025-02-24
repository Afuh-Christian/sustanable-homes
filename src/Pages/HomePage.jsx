import { useNavigate } from "react-router-dom";
import { YouTubeEmbedAdvanced } from "../assets/components/YouTube";

const housesDisplay1 = [
  {
    name: "Capsule House",
    image: "/capsule-house/v8/cap1.png",
   to: "/products/capsule-house",
  },
  {
    name: "Apple Cabin",
    image: "/apple-cabin/a1/cap (2).png",
    to: "/products/apple-cabin",
  },
 
]
const housesDisplay2 = [
  {
    name: "Natural House",
    image: "/natural-house/n1/cap (2).png",
    to: "/products/natural-house",
  },
  {
    name: "Dome House",
    image: "/dome-house/c1/cap (2).png",
    to: "/products/dome-house"
  },
  {
    name: "Model Double",
    image: "/model-double/d1/cap (1).png",
     to: "/products/model-double"
  },
 
]




function HomePage() {

  const navigate = useNavigate()

  
  const divStyle = {
    backgroundImage: "url('/home/bg.jpg')",
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    width: "100%",
    height: "90%",
  };
  const divStylemain = {
    backgroundImage: "url('/home/bg2.jpg')",
    backgroundSize: "cover", // or 'contain'
    backgroundPosition: "center",
    width: "100%",
    height: "90%",
  };
  return (
    <>
     <div
      className=" bg-cover bg-center bgImage"
      
    >
      <div
        style={divStyle}
      className="py-50 flex items-center justify-center bg-opacity-50">
        <div className="text-center text-white">
          <h2 className="text-4xl sm:text-4xl font-bold mb-8">
            Global Leading Developer of Cultural and Tourism Real Estate
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-lg">
            CONTACT US
          </button>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourphonenumber"
          className="fixed bottom-8 right-8"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            alt="WhatsApp"
            className="w-16 h-16"
          />
        </a>
      </div>
    </div>
  



















<div className="px-40 py-20 space-y-4">




<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
      {housesDisplay1.map((house) => (
        <div
        onClick={() => navigate(house.to)}
          key={house}
          className="relative rounded-md overflow-hidden shadow-lg h-[300px] group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
           
          />
          <img src={house.image} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {house.name}
          </div>
        </div>
      ))}
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {housesDisplay2.map((house) => (
        <div
        onClick={() => navigate(house.to)}
          key={house}
          className="relative rounded-md overflow-hidden shadow-lg h-[300px] group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
           
          />
          <img src={house.image} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {house.name}
          </div>
        </div>
      ))}
    </div>



</div>














    <div className="py-10"
    
    style={divStylemain}
    >


    <div className="relative w-full h-screen bg-cover bg-center flex items-center px-10 lg:px-20 text-white" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="relative flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl mx-auto">
        {/* Embedded YouTube Video */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9 border-4 border-white rounded-lg overflow-hidden">
           <YouTubeEmbedAdvanced
                  videoId={"https://youtu.be/7LbcrTdZt2I"}
                  title={"About"}
                  autoplay={false}
                  startAt={30}
                  muted={false}
                  className="w-full h-full"
                /> 
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold">ABOUT VOLFERDA</h2>
          <p className="mt-4 text-lg">
            VOLFERDA Industry Limited is a global leading developer of cultural and tourism real estate.
            We develop advanced cultural and tourism intelligent housing products for global clients.
          </p>
          <p className="mt-4 text-lg">
            Volfreda is dedicated to offering a sophisticated and smart mobile hotel solution for hotels, resorts, and Airbnb.
            Our innovative, high-design, self-contained cabins use prefab structural components to reduce site disturbance and minimize environmental impact.
          </p>
          <p className="mt-4 text-lg">
            Our houses are suitable for any climate—be it a humid beach, chilly mountains, or arid deserts.
            With a unique design, Volfreda houses offer connectivity, convenience, and comfort, with an easy-to-use smart home package.
          </p>
          <button className="mt-6 px-6 py-3 border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center gap-4 px-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-64 h-64 rounded-lg overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    </div>



    <div className="px-10 py-20">
          {/* Hot Products Section */}
          <h2 className="text-2xl font-bold text-center mb-6">HOT PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotProducts.map((product, index) => (
          <div 
          onClick={() => navigate(product.to)}
          key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4 text-center font-semibold">{product.name}</div>
          </div>
        ))}
      </div>
    </div>

    <section className="bg-blue-900 text-white py-12">
      <h2 className="text-center text-3xl font-bold mb-12">HOW TO COOPERATE</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-16">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full grid place-items-center">
              <img
              src={step.icon}
              alt="No icon"
              className=" w-10/12 h-7/12 rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>




   




    <div className="px-10 py-10">
  

      {/* Project Cases Section */}
      <h2 className="text-2xl font-bold text-center mt-12 mb-6">PROJECT CASES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCases.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 italic">{project.date}</p>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

const steps = [
  {
    title: "Project Evaluation",
    icon: "home/htc/htc (5).png" , 
    description: "The location of the project, the condition of the land, the investment amount, whether it is for tourism or resort, or Airbnb, whether the project is for personal investment or institutional investment, and the calculation of investment return rate."
  },
  {
    title: "Project Planning",
    icon: "home/htc/htc (4).png" ,
    description: "Cultural and tourism real estate development requires a clear project planning, product planning, design, and feasibility report for housing selection, project risk report, environmental assessment report, and investment return rate based on the positioning."
  },
  {
    title: "Product and project licenses",
    icon: "home/htc/htc (3).png" ,
    description: "Provide various customizable products based on local licenses and certifications. Depending on the complexity of the project, the production process takes 30-50 days. Each client can visit the production process of the house and see that we strictly adhere to standards and ensure the quality of our work."
  },
  {
    title: "Foundation Preparation",
    icon: "home/htc/htc (2).png" ,
    description: "While your house is being manufactured, you need to prepare the foundation for it at the same time. We will provide you with detailed instructions and the necessary drawings. At the same time, plan water, electricity and other systems in advance."
  },
  {
    title: "Delivery and Installation",
    icon: "home/htc/htc (1).png" ,
    description: "The house can be delivered in the whole house or parts. You can arrange for a freight forwarder to deliver it. If delivered in the whole house, the installation is very simple and can be done in a few hours. If delivered in house parts, you can assemble it with detailed drawings and video instructions or use our partners to assemble it."
  }];



const hotProducts = [
  { name: "VOLFERDA Capsule House Model E6", image: "/capsule-house/v6/cap (1).png"  , to : "/products/capsule-house/capsule-house-model-e6"},
  { name: "VOLFERDA Capsule House Model E8", image: "/capsule-house/v8/cap3.png" , to : "/products/capsule-house/capsule-house-model-e8"},
  { name: "VOLFERDA Apple Cabin Model A2", image: "/apple-cabin/a2/cap (1).png" , to : "/products/apple-cabin/apple-cabin-model-a2" },
  { name: "VOLFERDA Apple Cabin Model A1", image: "/apple-cabin/a1/cap (1).png" , to : "/products/apple-cabin/apple-cabin-model-a1"}
];

const projectCases = [
  { 
    title: "Volferda space capsule house, with natural wind and scenery", 
    date: "12, Jun. 2023", 
    description: "Classmate gathering, wedding and birthday celebration, new product release, family and friends gathering No matter what kind of party…", 
    image: "/capsule-house/v6/cap (3).png" 
  },
  { 
    title: "Best Camping Companion: Volferda Apple Cabin Tiny House", 
    date: "12, Jun. 2023", 
    description: "Residing within the Apple Cabin Tiny House offers an all-encompassing view of the night sky, thanks to its full transparency.", 
    image: "/apple-cabin/a2/cap (2).png" 
  },
  { 
    title: "How Are Capsule Houses Delivered, and What Are the Costs?", 
    date: "23, Aug. 2024", 
    description: "Many customers inquire about the transportation and shipping costs of Volferda capsule houses through social media, WhatsApp, or email.", 
    image: "/apple-cabin/a1/cap (3).png" 
  }
];



const images = [
  "/home/fti/fti (1).png",
  "/home/fti/fti (2).png",
  "/home/fti/fti (3).png",
  "/home/fti/fti (4).png"
];




export default HomePage