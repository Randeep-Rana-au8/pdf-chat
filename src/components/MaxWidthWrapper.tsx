import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({children, className}: {children: ReactNode, className?: string}) => {
  return (
    <div className={cn('max-w-screen-xl w-full p-2.5 mx-auto md:p-20', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper