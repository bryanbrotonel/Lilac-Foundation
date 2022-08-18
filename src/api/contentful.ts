import axios, { AxiosError, AxiosResponse } from 'axios';
import * as Contentful from 'contentful';
import { TypeBlogPost, TypeProjectPost } from '../types';

const CONTENTFUL = require('contentful');
const CONTENT_SELECT = 'sys.id,sys.createdAt,fields';

// Contentful client for blog and porject posts
const CONTENTFUL_POSTS_CLIENT = CONTENTFUL.createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_POSTS_SPACE || ''}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_POSTS_TOKEN || ''}`,
});

// Contentful client for website content (pages, etc)
const CONTENTFUL_CONTENT_CLIENT = CONTENTFUL.createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_CONTENT_SPACE || ''}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_CONTENT_TOKEN || ''}`,
});

// Retreive blog posts from Contentful in order of creation date
export async function fetchContentfulBlogEntries() {
  const blogPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
    select: CONTENT_SELECT,
  });

  // Returns blog posts as an array of Post objects
  return (await blogPostItems.items) as TypeBlogPost[];
}

// Retreive single blog post from Contentful by slug
export async function fetchContentfulBlogEntry(slug: string) {
  const blogPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'blogPost',
    select: CONTENT_SELECT,
    'fields.slug': slug,
  });

  // Returns blog posts as Blog Post object
  return (await blogPostItems.items[0]) as TypeBlogPost;
}

// Retreive project posts from Contentful in order of creation date
export async function fetchContentfulProjectEntries() {
  const projectPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'projectPost',
    order: '-sys.createdAt',
    select: CONTENT_SELECT,
    limit: 100,
  });

  // Returns blog posts as an array of Project Post objects
  return (await projectPostItems.items) as TypeProjectPost[];
}

// Retreive blog posts from Contentful in order of creation date
export async function fetchContentfulProjectEntry(slug: string) {
  const projectPostItems = await CONTENTFUL_POSTS_CLIENT.getEntries({
    content_type: 'projectPost',
    select: CONTENT_SELECT,
    'fields.slug': slug,
  });

  // Returns blog posts as Project Post object
  return (await projectPostItems.items[0]) as TypeProjectPost;
}

// Retreive blog posts from Contentful in order of creation date
export async function fetchContentfulContentEntries(
  content_type: string,
  order: string = ''
) {
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
  const contentfulEntries = await CONTENTFUL_CONTENT_CLIENT.getEntries({
    content_type: content_type,
    select: CONTENT_SELECT,
    'fields.slug': slug,
  });

  return (await contentfulEntries.items[0]) as Contentful.Entry<any>;
}

// Retreive Contentful content by id
export async function fetchContentfulContentEntryByID(id: string) {
  // Returns Contentful entry
  return await axios({
    method: 'post',
    url: '/.netlify/functions/ContentfulAPI',
    data: {
      space: 'content',
      id: id,
    },
  }).then(function (response: AxiosResponse) {
    return response.data;
  });
}
