import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export default sanityClient({
  projectId: '3i6aytq6',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-04-09',
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
