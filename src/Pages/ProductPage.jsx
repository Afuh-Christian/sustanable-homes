const ProductPage = () => {
    const products = [
      { id: 1, name: "VOLFERDA Capsule House Model E6", image: "/images/e6.jpg" },
      { id: 2, name: "VOLFERDA Capsule House Model E8", image: "/images/e8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
      { id: 3, name: "VOLFERDA Capsule House Model D8", image: "/images/d8.jpg" },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <nav className="text-sm text-gray-500 mb-4">Home / All Products</nav>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="p-4 border rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Products</h2>
              <ul className="space-y-2">
                {[
                  "Capsule House",
                  "Apple Cabin",
                  "Natural House",
                  "Dome House",
                  "Model Double",
                  "Silence Pods",
                ].map((item) => (
                  <li key={item} className="hover:text-blue-700 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold mb-4">Hot Products</h2>
              <div className="flex items-center gap-4">
                <img
                  src="/images/e6.jpg"
                  alt="Hot Product"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <p>VOLFERDA Capsule House Model E6</p>
              </div>
            </div>
          </aside>
  
          {/* Main Content */}
          <main className="lg:col-span-3">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">All Products</h1>
            <p className="text-gray-600 mb-8">
              Volferda offers a variety of tiny houses, providing sophisticated hotel
              solutions for outdoor camping, resort, Airbnb, and personal living.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="p-4 border rounded-xl shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  };
  
  export default ProductPage;