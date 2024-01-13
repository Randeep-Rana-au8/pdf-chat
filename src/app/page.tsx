import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className="text-sm font-semibold text-gray-700">
          PDF chat is now public!
        </p>
      </div>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Chat with your <span className='text-violet-600'>documents</span> in seconds.
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        PDF chat is a free and open source platform that allows you to chat with your documents in seconds. Just upload a PDF and start chatting!
      </p>

      <Link 
      href='/dashboard' 
      className={buttonVariants({
        size: 'lg',
        className: 'mt-5',
      })} 
      target='_blank'
      >
        Get started <ArrowRight className='ml-2 h-5 w-5' />
      </Link>
    </MaxWidthWrapper>
    
    <div>
      <div className='relative isolate'>
        <div area-hidden='true' className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          {/* add clipPath style in below div */}
        <div className='relative left-[calc(50% - 11rem) aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-1 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'>

        </div>

        <div>
          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image 
                src='/dashboard-preview.jpg'
                alt='product preview'
                width={1364}
                height={866}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    </>
  )
}
