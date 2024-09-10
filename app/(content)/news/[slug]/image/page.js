'use client'
import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';

export default function ImagePage({ params }) {
  const router = useRouter()
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newsSlug === newsItem.slug;
  });
  if (!newsItem) {
    return notFound();
  }
  return (
    <div className="fullscreen-image" onClick={router.back} >
      <h2> default pageimage</h2>
      <Link href={'.'}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </Link>
    </div>
  );
}
