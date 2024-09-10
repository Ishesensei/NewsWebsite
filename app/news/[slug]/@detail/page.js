import { DUMMY_NEWS } from '@/dummy-news';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export async function generateMetadeta({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newsSlug === newsItem.slug;
  });
  if (!newsItem.slug) {
    return notFound();
  }
  return {
    title: params.slug,
    description: params.slug,
  };
}
export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newsSlug === newsItem.slug;
  });
  if (!newsItem.slug) {
    return NotFound();
  }
  return (
    <>
      <header>
        <article className="news-article">
          <Link href={`/news/${newsSlug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </article>
        <p>{newsItem.content} </p>
      </header>
    </>
  );
}
