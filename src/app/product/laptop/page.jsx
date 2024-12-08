import Link from 'next/link'
import React from 'react'

export default function Page() {
  return        (
    <>
    <div>laptop page</div>
    <br />
    <Link href='./../'>Goes to hello world</Link>
    <br />
    <Link href='./'>products</Link>
    </>
  )
}
