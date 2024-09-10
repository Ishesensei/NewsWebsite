import NewsList from '@/components/news-list';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';
import React from 'react';

export default function YearPage({ params }) {
  const filter = params.filter;
  let filterYear = filter?.[0];
  let filterMonth = filter?.[1];
  let AvailableNewsMonths;
  let newsContent;

  if (filterYear && !filterMonth) {
    AvailableNewsMonths = getAvailableNewsMonths(filterYear);
    const news = getNewsForYear(filterYear);
    newsContent = <NewsList news={news} />;
  }
  if (filterYear && filterMonth) {
    let news = getNewsForYearAndMonth(filterYear, filterMonth);
    news.length === 0
      ? (newsContent = <p>No News with the chosen Resources!!</p>)
      : (newsContent = <NewsList news={news} />);
    AvailableNewsMonths = [];
  }

  if (
    (filterYear && !getAvailableNewsYears().includes(+filterYear)) ||
    (filterMonth && !getAvailableNewsMonths(filterYear).includes(+filterMonth))
  ) {
    throw new Error('Invalid Year or Month!!');
  }
  let years = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {!(AvailableNewsMonths === undefined)
              ? AvailableNewsMonths.map((month) => (
                  <li key={month}>
                    <Link href={`/archive/${filterYear}/${month}`}>
                      {month}
                    </Link>
                  </li>
                ))
              : years.map((year) => (
                  <li key={year}>
                    <Link href={`/archive/${year}`}>{year}</Link>
                  </li>
                ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
