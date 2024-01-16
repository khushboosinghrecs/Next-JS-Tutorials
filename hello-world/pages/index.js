import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
export default function Home() {
    const router = useRouter();
    const handleClick = ()=>{
        console.log('Placing your order');
        router.replace('/product');
        // router.push('/blog');

    }
  return (
    <div>
    <div>Home page</div>
    <Link href='/blog'>
    <a>Blog</a>
    </Link>
    <Link href='/product'>
        <a>product</a>
    </Link>
    <Link href='/posts'>
    <a>
      Posts
    </a>
    </Link>
    <button onClick={handleClick}>
    place Order
    </button>
    </div>
  )
}
