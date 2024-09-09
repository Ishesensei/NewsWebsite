import NewsList from '@/components/news-list';
import { getNewsForYear } from '@/lib/news';
import React from 'react';

export default function YearPage({ params }) {
  const newList = getNewsForYear(params.year);
  return <NewsList news={newList} />;
}
