import { useRouter } from "next/router";

const Review = () => {
    const router = useRouter()
  const {productId, reviewId} =  router.query
    return ( 
        <div>
            <h1>productIDn {productId}</h1>
            <h2> reviewID {reviewId}</h2>
        </div>
     );
}
 
export default Review;