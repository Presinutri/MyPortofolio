'use client';

import { useEffect } from 'react';

export function AutoPrint() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 1500); // give enough time for everything to render

    return () => clearTimeout(timer);
  }, []);

  return null;
}
