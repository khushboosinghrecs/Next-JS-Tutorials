import React from 'react'
import {useRouter} from 'next/router';
export default function fn() {
  const router = useRouter();
  const productId = router.query.itemId;
  return (
<h1>Product review Details of Product {productId}</h1>
    )
}
