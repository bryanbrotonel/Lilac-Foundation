import * as Contentful from 'contentful';
import { TypeBlogPost, TypeProjectPost } from '../types';

const CONTENTFUL = require('contentful');
const CONTENT_SELECT = 'sys.id,sys.createdAt,fields';

// Contentful client for blog and porject posts
const CONTENTFUL_POSTS_CLIENT = CONTENTFUL.createClient({
  space: process.env.REACT_APP_CONTENTFUL_POSTS_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_POSTS_ACCESS_TOKEN,
});

// Contentful client for website content (pages, etc)
const CONTENTFUL_CONTENT_CLIENT = CONTENTFUL.createClient({
  space: process.env.REACT_APP_CONTENTFUL_CONTENT_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_CONTENT_ACCESS_TOKEN,
});

export async function fetchContentfulBlogEntries() {
  // Retreive blog posts from Contentful in order of creation date
  const blogPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'testBlogPost',
    order: '-sys.createdAt',
    select: CONTENT_SELECT,
    limit: 10,
  });

  // Returns blog posts as an array of Post objects
  return (await blogPostItems.items) as TypeBlogPost[];
}

export async function fetchContentfulBlogEntry(slug: string) {
  // Retreive blog posts from Contentful in order of creation date
  const blogPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'testBlogPost',
    select: CONTENT_SELECT,
    'fields.slug': slug,
  });

  // Returns blog posts as an array of Post objects
  return (await blogPostItems.items[0]) as TypeBlogPost;
}

export async function fetchContentfulProjectEntries() {
  // Retreive blog posts from Contentful in order of creation date
  const projectPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'projectPost',
    order: '-sys.createdAt',
    select: CONTENT_SELECT,
    limit: 100,
  });

  // Returns blog posts as an array of Post objects
  return (await projectPostItems.items) as TypeProjectPost[];
}

export async function fetchContentfulProjectEntry(slug: string) {
  // Retreive blog posts from Contentful in order of creation date
  const projectPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'projectPost',
    select: CONTENT_SELECT,
    'fields.slug': slug,
  });

  // Returns blog posts as an array of Post objects
  return (await projectPostItems.items[0]) as TypeProjectPost;
}

export async function fetchContentfulContentEntries(
  content_type: string,
  order: string = ''
) {
  // Retreive blog posts from Contentful in order of creation date
  const contentfulEntries = await CONTENTFUL_CONTENT_CLIENT.getEntries({
    content_type: content_type,
    select: CONTENT_SELECT,
    order: order,
  });

  // Returns blog posts as an array of Post objects
  return (await contentfulEntries.items) as Contentful.Entry<any>[];
}

export async function fetchContentfulContentEntry(
  content_type: string,
  slug: string
) {
  // Retreive blog posts from Contentful in order of creation date
  const contentfulEntries = await CONTENTFUL_CONTENT_CLIENT.getEntries({
    content_type: content_type,
    select: CONTENT_SELECT,
    'fields.slug': slug,
  });

  // Returns blog posts as an array of Post objects
  return (await contentfulEntries.items[0]) as Contentful.Entry<any>;
}
