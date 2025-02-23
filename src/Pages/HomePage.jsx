
function HomePage() {
  return (
    <>
     <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('your-background-image.jpg')",
      }}
    >
      <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">
            Global Leading Developer of Cultural and Tourism Real Estate
          </h1>
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
  







































    <div className="relative w-full h-screen bg-cover bg-center flex items-center px-10 lg:px-20 text-white" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl mx-auto">
        {/* Embedded YouTube Video */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9 border-4 border-white rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Volfreda Factory Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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


    <div className="flex justify-center gap-4 p-6 bg-gray-900">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-64 h-64 rounded-lg overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    <div>
          {/* Hot Products Section */}
          <h2 className="text-2xl font-bold text-center mb-6">HOT PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotProducts.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4 text-center font-semibold">{product.name}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gray-100 text-gray-900">

      <section className="bg-blue-900 text-white py-16 px-6">
        <h2 className="text-center text-3xl font-bold mb-10">HOW TO COOPERATE</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-blue-800 rounded-lg shadow-md">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>




   




    <div className="p-8">
  

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
  { title: "Project Evaluation", icon: "💬", description: "Evaluate location, land condition, investment amount, and potential returns." },
  { title: "Project Planning", icon: "💰", description: "Develop clear positioning, feasibility, and risk assessment reports." },
  { title: "Product and Licenses", icon: "🏡", description: "Customize based on local regulations and ensure quality production." },
  { title: "Foundation Preparation", icon: "🚜", description: "Prepare land, utilities, and foundation while your house is being manufactured." },
  { title: "Delivery & Installation", icon: "🚚", description: "Receive the house fully or in parts, with installation guidance available." },
];



const hotProducts = [
  { name: "VOLFERDA Capsule House Model E6", image: "/path-to-image1.jpg" },
  { name: "VOLFERDA Capsule House Model E8", image: "/path-to-image2.jpg" },
  { name: "VOLFERDA Apple Cabin Model A2", image: "/path-to-image3.jpg" },
  { name: "VOLFERDA Apple Cabin Model A1", image: "/path-to-image4.jpg" }
];

const projectCases = [
  { 
    title: "Volferda space capsule house, with natural wind and scenery", 
    date: "12, Jun. 2023", 
    description: "Classmate gathering, wedding and birthday celebration, new product release, family and friends gathering No matter what kind of party…", 
    image: "/path-to-project1.jpg" 
  },
  { 
    title: "Best Camping Companion: Volferda Apple Cabin Tiny House", 
    date: "12, Jun. 2023", 
    description: "Residing within the Apple Cabin Tiny House offers an all-encompassing view of the night sky, thanks to its full transparency.", 
    image: "/path-to-project2.jpg" 
  },
  { 
    title: "How Are Capsule Houses Delivered, and What Are the Costs?", 
    date: "23, Aug. 2024", 
    description: "Many customers inquire about the transportation and shipping costs of Volferda capsule houses through social media, WhatsApp, or email.", 
    image: "/path-to-project3.jpg" 
  }
];



const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];




export default HomePage