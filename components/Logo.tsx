import { Wallet } from 'lucide-react'
import React from 'react'

function Logo() {
  return (
    <a href="/" className='flex items-center gap-2 p-5'>
        <Wallet className='stroke h-10 w-10 stroke-blue-500' />
        <p className='bg-gradient-to-r to-blue-400 from-purple-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>Moneymap</p>
    </a>
  )
}

export default Logo
