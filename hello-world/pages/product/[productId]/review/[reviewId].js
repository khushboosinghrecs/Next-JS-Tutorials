import React from 'react'
import { useRouter } from 'next/router';

//dynamic routes
function review() {
    const router = useRouter();

    const {reviewId, productId} = router.query;
  return (
    <div>review Id {reviewId} of product {productId}</div>
  )
}

export default review