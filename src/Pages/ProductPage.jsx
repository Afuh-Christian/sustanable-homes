import { CategoryComponent } from "./AboutUsPage";
import categories from "../Data/categoryData.json"
import products from "../Data/productData.json"
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";


const ProductPage = () => {


    const {  categoryName } = useParams();

    
  const category = useMemo(()=>{
    return categories.find(e => e.id === categoryName)
  } , [categoryName])

  const productCache = useMemo(() => {
    if(category){
      return products?.filter(e => category.to === e?.parent)
    }
    return products 
  },[categoryName , category])

const navigate = useNavigate()

  
    return (
      <div className="container mx-auto py-4 px-36">
        <nav className="text-sm text-gray-500 mb-4">Home / {category?.name?? "All Products"}</nav>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="space-y-4">
                  <CategoryComponent />

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
            <h1 className="text-2xl font-bold text-blue-700 mb-4"> {category?.name?? "All Products"} </h1>
            <p className="text-gray-600 mb-8">
            {category?.description?? "Volferda offers a variety of tiny houses, providing sophisticated hotel solutions for outdoor camping, resort, Airbnb, and personal living."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {productCache?.map((product) => (
                <div key={product}
                  onClick={() => {navigate(`${product.parent}/${product.to}`)}}
                className="p-4   shadow-sm">
                  <img
                    src={product.header.image}
                    alt={product.header.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg font-semibold">{product.header.title}</h2>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  };
  
  export default ProductPage;