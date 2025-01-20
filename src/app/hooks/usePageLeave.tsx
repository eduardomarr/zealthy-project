'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function usePageLeave(targetPath: string, onLeave: () => void) {
  const pathname = usePathname();

  useEffect(() => {
    const isTargetPage = pathname === targetPath;

    if (isTargetPage) {
      return () => {
        const newPathname = window.location.pathname;
        if (newPathname !== targetPath) {
          onLeave();
        }
      };
    }
  }, [pathname, targetPath, onLeave]);
}
