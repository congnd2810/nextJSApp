import { useEffect } from 'react';
import { LayoutProps } from '../../models/index';
import Link from 'next/link';

export function MainLayout ({children}: LayoutProps) {
  useEffect (() => {
    console.log('MainLayout mounting')
    return () => {
      console.log('MainLayout unmounted')
    }
  })
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>
        {children}
      </div>
    </div>
  );
}
