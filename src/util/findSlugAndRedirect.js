import router from '@/router';

/**
 * Finds the slug for the provided document and redirects to it.
 * Uses a delay in order for the Cloud function to set the slug first.
 * @param {FirestoreDocumentReference} reference
 */
export default function findSlugAndRedirect(reference) {
  const delay = 500;

  setTimeout(async () => {
    try {
      const { slug } = await reference.get().then(snapshot => snapshot.data());
      return router.push({ name: 'ItemHome', params: { slug } });
    } catch {
      return router.push({ name: 'Home' });
    }
  }, delay);
}
