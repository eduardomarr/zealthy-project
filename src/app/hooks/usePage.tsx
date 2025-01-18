'use client';

import { useState } from 'react';
import Page1 from '@/components/ui/page1';
import Page2 from '@/components/ui/page2';
import Page3 from '@/components/ui/page3';

export function usePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [progressValue, setProgressValue] = useState();

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      default:
        return null;
    }
  };
  const getProgressValue = () => {
    switch (currentPage) {
      case 1:
        return 33.33;
      case 2:
        return 66.66;
      case 3:
        return 100;
      default:
        return 0;
    }
  };

  return { currentPage, renderPage, nextPage, prevPage, getProgressValue };
}
