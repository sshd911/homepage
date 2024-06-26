// import dynamic from 'next/dynamic';
// import { Header } from '@/components/Header';

export function Layout({ children }) {
  // const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'));
  return (
    <div id="{'sec'}" className="isolate w-full">
      <div className="">
      {/* <LoadingScreen className="noise"/> */}
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-[#2C001E] ring-1 ring-zinc-100 ring-zinc-300/20" />
          </div>
        </div>
        {/* <div className="relative flex w-full flex-col"> */}
          {/* <Header /> */}
          <main>{children}</main>
        {/* </div> */}
      </div>
      </div>
  );
}
