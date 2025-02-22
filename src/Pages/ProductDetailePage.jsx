import { useParams } from "react-router-dom";
import { CapsuleHouseDetail, ProductDetails } from "../assets/components/ProductDetails/components"

function ProductDetailePage() {


    const { productId } = useParams();


  return (
   <>
   <CapsuleHouseDetail/>
   <ProductDetails/>
   </>
  )
}

export default ProductDetailePage