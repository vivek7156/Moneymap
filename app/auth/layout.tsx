import Logo from '@/components/Logo'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode}) {
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-between'>
      <div className='mt-12'>
        <Logo />
        {children}
      </div>
    </div>
  )
}

export default layout
