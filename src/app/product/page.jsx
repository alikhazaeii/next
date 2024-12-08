import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <div>prdocut page..</div>
      <Link href='./product/laptop'>this is ur laptops</Link>
      <br />
      <Link href='./about'>back to about</Link>
    </>
  )
}
