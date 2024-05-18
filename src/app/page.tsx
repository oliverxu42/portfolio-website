import Navbar from '@/components/Navbar';
import asdf from '@/app/favicon.ico';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='container mx-auto my-auto px-5 py-36 '>
        <div className='flex justify-between mb-3'>
          <div>
            <h1 className='text-5xl font-bold mb-3'>Hi there! I'm Oliver ✈️</h1>
            <h2 className='text-5xl font-light'>
              Aerospace and software engineer.
            </h2>
          </div>
          <div className='m-3 px-5'>
            <Image src={asdf} alt='asdf' width={150} height={150}></Image>
          </div>
        </div>
        <div className='mb-10'>
          <p className='text-2xl font-light'>
            Combining the worlds of space, tech and software development.
          </p>
        </div>
        <div className='mb-10'>
          <button className='text-white bg-stone-800 hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-5'>
            Résumé
          </button>
          <button className='border hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>
            Get in touch
          </button>
        </div>
        <div className='flex items-center'>
          <Link href='/about'>Learn more about me</Link>
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </div>
      </div>
      <Footer />
    </main>
  );
}
