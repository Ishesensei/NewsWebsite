'use client';
import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newsSlug === newsItem.slug;
  });
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <h1>InterceptedImagePage</h1>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
