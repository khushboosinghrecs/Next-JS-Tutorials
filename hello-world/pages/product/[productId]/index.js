import React from 'react'
import {useRouter} from 'next/router';
export default function index() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
<h1>Product dynamic route Details of Product {productId}</h1>
    )
}
