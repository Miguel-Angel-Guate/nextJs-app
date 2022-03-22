import { useRouter } from "next/router";

useRouter
const ProductDetail = () => {
    const router = useRouter()
  const productId =  router.query.productId
    return ( 
        <h3>detail about product {productId}</h3>
     );
}
 
export default ProductDetail;