// src/app/page.jsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/about');
  }, [router]);

  return null; // リダイレクトするため、何も表示しない
};

export default Home;
