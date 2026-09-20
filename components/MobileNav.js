'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();
  const root = () => document.documentElement.classList;

  useEffect(() => { root().remove('nav-open'); }, [pathname]);

  return <>
    <div className="mobile-bar">
      <button aria-label="Open menu" onClick={() => root().toggle('nav-open')}>☰</button>
      <span>UKPSC 2026</span>
    </div>
    <div className="nav-overlay" onClick={() => root().remove('nav-open')} />
  </>;
}
