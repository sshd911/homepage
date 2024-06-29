// 'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
// import { HeroPattern } from '@/components/HeroPattern';
// import { useEffect, useState } from 'react';

export function Layout({ children }) {
  // const [isLoading, setIsLoading] = useState(true);
  const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'));

  // useEffect(() => {
    // const timer = setTimeout(() => {
      // setIsLoading(false);
    // }, 3000);

    // return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {isLoading ? ( */}
        <LoadingScreen />
        {/*  ) : ( */}
        {/*  <>  */}
          <div className="fixed inset-0 flex justify-center sm:px-8">
            {/* <HeroPattern> */}
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-black ring-1 ring-zinc-100 ring-zinc-300/20" />
              </div>
            {/* <HeroPattern /> */}
          </div>
          <div className="relative flex w-full flex-col">
            <Header />
            <main className="flex-auto">{children}</main>
          </div>
        {/* </> */}
       {/* )} */}
    </>
  );
}
