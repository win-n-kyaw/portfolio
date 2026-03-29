import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: false,
    })
  : null;

const builder = projectId ? imageUrlBuilder(sanityClient!) : null;

export function urlFor(source: any) {
  if (!builder) return { url: () => '' };
  return builder.image(source);
}

export async function sanityFetch<T>(query: string, params = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}
