import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';
import React from 'react';

export default function LatestNewsPage() {
  const news = getLatestNews();
  return (
    <>
      <h2>LatestNewsPage</h2>
      <NewsList news={news} />
    </>
  );
}
