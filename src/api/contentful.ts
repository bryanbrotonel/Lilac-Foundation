import { TypeBlogPost } from '../types';

const CONTENTFUL = require('contentful');
const CONTENTFUL_CLIENT = CONTENTFUL.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchContentfulBlogEntries() {
  // Retreive blog posts from Contentful in order of creation date
  const blogPostItems = await CONTENTFUL_CLIENT.getEntries({
    content_type: 'testBlogPost',
    order: '-sys.createdAt',
    select: 'sys.id,sys.createdAt,fields',
    limit: 10,
  });

  console.log('blogPostItems', blogPostItems);

  // Returns blog posts as an array of Post objects
  return (await blogPostItems.items) as TypeBlogPost[];
}

export async function fetchContentfulBlogEntry(slug: string) {
  // Retreive blog posts from Contentful in order of creation date
  const blogPostItems = await CONTENTFUL_CLIENT.getEntries({
    content_type: 'testBlogPost',
    select: 'sys.id,sys.createdAt,fields',
    'fields.slug': slug,
  });

  // Returns blog posts as an array of Post objects
  return (await blogPostItems.items[0]) as TypeBlogPost;
}
