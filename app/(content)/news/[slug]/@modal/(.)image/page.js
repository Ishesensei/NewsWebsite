import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <h1>InterceptedImagePage</h1>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
