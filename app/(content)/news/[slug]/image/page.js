import { getAllNews, getNewsItem } from '@/lib/news';
import { notFound, useRouter } from 'next/navigation';

export default async function ImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
