import React from 'react'
import Link from 'next/link'
export default function index({ productId =100 }) {
    return (
        <>
            <Link href='/product/1' >
                <a>product 1</a>
            </Link>
            <Link href='product/2' >
                <a>product 2</a>
            </Link>
            <Link href='product/3'  replace>
                <a>product 3</a>
            </Link>
            <Link href={`/product/${productId}`} >
                <a>product {productId}</a>
            </Link>
            <h2>product 1</h2>
            <h2>product 1</h2>
            <Link href='/' >
                <a>home</a>
            </Link>
        </>
    )
}
