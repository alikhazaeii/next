import Link from 'next/link'
import React from 'react'

export default function Page() {  
  return (
    <>
    <div>wlc to about</div>
    <Link href='./product' >goes to products</Link>
    <br />
    <Link href='./'>back to app</Link>
    </>
    
  )
}

