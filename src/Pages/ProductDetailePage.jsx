import { useParams } from "react-router-dom";
import RelatedProducts, { CapsuleHouseDetail, ProductDetails } from "../assets/components/ProductDetails/components"

function ProductDetailePage() {


    const { productId , categoryName } = useParams();


  return (
   <>
   <CapsuleHouseDetail/>
   <ProductDetails/>
   <RelatedProducts/>
   </>
  )
}

export default ProductDetailePage