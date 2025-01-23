'use client';

import { useEffect, useState } from 'react';
import Page1 from '@/components/ui/page1';
import Page2 from '@/components/ui/page2';
import Page3 from '@/components/ui/page3';
export function usePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
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
    return (currentPage / 3) * 100;
  };

  useEffect(() => {
    if (currentPage > 3) {
      setCurrentPage(3);
    }
  }, [currentPage]);

  return {
    currentPage,
    renderPage,
    nextPage,
    prevPage,
    getProgressValue,
    setPage,
  };
}
