import axios, { AxiosResponse } from 'axios';
import * as Contentful from 'contentful';
import { TypeBlogPost, TypeProjectPost } from '../types';

const CONTENT_SELECT = 'sys.id,sys.createdAt,fields';

// Retreive blog posts from Contentful in order of creation date
export async function fetchContentfulPostsEntries(content_type: string) {
  return await axios({
    method: 'post',
    url: '/.netlify/functions/ContentfulAPI',
    data: {
      space: 'posts',
      query: {
        content_type: content_type,
        order: '-sys.createdAt',
        select: CONTENT_SELECT,
      },
    },
  }).then(function (response: AxiosResponse) {
    return response.data.items as Array<TypeProjectPost> | Array<TypeBlogPost>;
  });
}

// Retreive single blog or project post from Contentful by slug
export async function fetchContentfulPostsEntry(
  content_type: string,
  slug: string
) {
  return await axios({
    method: 'post',
    url: '/.netlify/functions/ContentfulAPI',
    data: {
      space: 'posts',
      query: {
        content_type: content_type,
        select: CONTENT_SELECT,
        'fields.slug': slug,
      },
    },
  }).then(function (response: AxiosResponse) {
    return response.data.items[0] as TypeProjectPost | TypeBlogPost;
  });
}

// Retreive blog posts from Contentful in order of creation date
export async function fetchContentfulContentEntries(
  content_type: string,
  order: string = ''
) {
  return await axios({
    method: 'post',
    url: '/.netlify/functions/ContentfulAPI',
    data: {
      space: 'content',
      query: {
        content_type: content_type,
        select: CONTENT_SELECT,
        order: order,
      },
    },
  }).then(function (response: AxiosResponse) {
    return response.data.items as Array<Contentful.Entry<any>>;
  });
}

export async function fetchContentfulContentEntry(
  content_type: string,
  slug: string
) {
  return await axios({
    method: 'post',
    url: '/.netlify/functions/ContentfulAPI',
    data: {
      space: 'content',
      query: {
        content_type: content_type,
        select: CONTENT_SELECT,
        'fields.slug': slug,
      },
    },
  }).then(function (response: AxiosResponse) {
    return response.data.items[0] as Contentful.Entry<any>;
  });
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
