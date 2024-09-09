import { DUMMY_NEWS } from '@/dummy-news';
import React from 'react';
import NotFound from './not-found';
export async function generateMetadeta({ params }) {
  const newSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newSlug === newsItem.slug;
  });
  if (!newsItem.slug) {
    return NotFound();
  }
  return {
    title: params.slug,
    description: params.slug,
  };
}
export default function NewsDetailPage({ params }) {
  const newSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newSlug === newsItem.slug;
  });
  if (!newsItem.slug) {
    return NotFound();
  }
  return (
    <>
      <header>
        <article className="news-article">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </article>
        <p>{newsItem.content} </p>
      </header>
    </>
  );
}
