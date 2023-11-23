'use client';
import { useState } from 'react';

export default function Home() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  return (
    <main className=' min-h-screen  '>
      <h1 className='text-6xl font-bold '>Hello, world!</h1>
      <div className='flex  '>
        <div className='relative'>
          <input
            type='number'
            id='first'
            className='peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            onInput={(e) => setFirst(parseInt(e.currentTarget.value))}
          />
          <label
            htmlFor='first'
            className='absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            first
          </label>
        </div>
        +
        <div className='relative'>
          <input
            type='number'
            id='second'
            className='peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
            onInput={(e) => setSecond(parseInt(e.currentTarget.value))}
          />
          <label
            htmlFor='second'
            className='absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
          >
            second
          </label>
        </div>
        ={' '}
        <span aria-label='result' id='result'>
          {first + second}{' '}
        </span>
      </div>
    </main>
  );
}
