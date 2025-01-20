'use client';

import { useMemo, useState } from 'react';
import Page1 from '@/components/ui/page1';
import Page2 from '@/components/ui/page2';
import Page3 from '@/components/ui/page3';
import useFields from './useFields';

export function usePage() {
  const { page2Fields, page3Fields } = useFields();

  const [currentPage, setCurrentPage] = useState(1);

  const isPage2Available = useMemo(() => page2Fields.length > 0, [page2Fields]);
  const isPage3Available = useMemo(() => page3Fields.length > 0, [page3Fields]);

  const availablePages = useMemo(() => {
    const pages = [<Page1 key="page1" />];
    if (isPage2Available) pages.push(<Page2 key="page2" />);
    if (isPage3Available) pages.push(<Page3 key="page3" />);
    return pages;
  }, [isPage2Available, isPage3Available]);

  const totalPages = availablePages.length;

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const renderPage = useMemo(() => {
    return availablePages[currentPage - 1] || null;
  }, [currentPage, availablePages]);

  const getProgressValue = useMemo(() => {
    return (currentPage / totalPages) * 100;
  }, [currentPage, totalPages]);

  return { currentPage, renderPage, nextPage, prevPage, getProgressValue };
}
