import Link from 'next/link';
import { Suspense } from 'react';
import NewsList from '@/components/news-list';
import {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';

export async function ArchiveHeader({ year }) {
  let years = await getAvailableNewsYears();
  let AvailableNewsMonths = getAvailableNewsMonths(year) || [];
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {year && AvailableNewsMonths.length > 0
            ? AvailableNewsMonths.map((month) => (
                <li key={month}>
                  <Link href={`/archive/${year}/${month}`}>{month}</Link>
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
  );
}

export async function FilteredNews({ year, month }) {
  let newsContent;
  let news = [];

  news = year
    ? month
      ? await getNewsForYearAndMonth(year, month)
      : await getNewsForYear(year)
    : [];

  newsContent =
    news.length === 0 ? (
      <p>No News with the Selection!!</p>
    ) : (
      <NewsList news={news} />
    );

  return newsContent;
}

export default async function YearPage({ params }) {
  const filter = params.filter;
  let filterYear = filter?.[0];
  let filterMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading headers...</p>}>
        <ArchiveHeader year={filterYear} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={filterYear} month={filterMonth} />
      </Suspense>
    </>
  );
}
