import * as Contentful from 'contentful';

export interface TypeBlogPost {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: Contentful.EntryFields.Symbol;
    subtitle: Contentful.EntryFields.Symbol;
    author?: Contentful.EntryFields.Symbol;
    headerImage: Contentful.Asset;
    content: Contentful.EntryFields.Text;
    slug: Contentful.EntryFields.Symbol;
  };
}
