import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

export function Layout({ children }) {
  const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'));
  return (
    <>
      <LoadingScreen />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-black ring-1 ring-zinc-100 ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
      </div>
    </>
  );
}
