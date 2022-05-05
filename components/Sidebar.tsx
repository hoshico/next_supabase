import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-[300px] min-h-screen bg-gray-200 text-center'>
      <Link href="/">
        <a className="text-2xl text-extrabold text-black">MLB</a>
      </Link>
    </div>
  )
}
