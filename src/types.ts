import * as Contentful from 'contentful';

export interface TypeBlogPostFields {
  title: Contentful.EntryFields.Symbol;
  subtitle: Contentful.EntryFields.Symbol;
  author?: Contentful.EntryFields.Symbol;
  headerImage: Contentful.Asset;
  content: Contentful.EntryFields.Text;
  slug?: Contentful.EntryFields.Symbol;
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;

export interface TypeProjectPostFields {
  title: Contentful.EntryFields.Symbol;
  currentProject?: Contentful.EntryFields.Boolean;
  date?: Contentful.EntryFields.Date;
  headerImage?: Contentful.Asset;
  content?: Contentful.EntryFields.Text;
  slug?: Contentful.EntryFields.Symbol;
}

export type TypeProjectPost = Contentful.Entry<TypeProjectPostFields>;

export interface TypeAboutItemFields {
  title?: Contentful.EntryFields.Symbol;
  headerImage?: Contentful.Asset;
  description?: Contentful.EntryFields.Text;
  order?: Contentful.EntryFields.Integer;
}

export type TypeAboutItem = Contentful.Entry<TypeAboutItemFields>;

export interface TypeBlurbFields {
  blurbTitle?: Contentful.EntryFields.Symbol;
  blurbContent?: Contentful.EntryFields.Text;
}

export type TypeBlurb = Contentful.Entry<TypeBlurbFields>;

export interface TypeDonateLinkFields {
  name?: Contentful.EntryFields.Symbol;
  donateLink?: Contentful.EntryFields.Symbol;
}

export type TypeDonateLink = Contentful.Entry<TypeDonateLinkFields>;

export interface TypeSocialsFields {
  Facebook?: Contentful.EntryFields.Symbol;
  Instagram?: Contentful.EntryFields.Symbol;
  Mail?: Contentful.EntryFields.Symbol;
}

export type TypeSocials = Contentful.Entry<TypeSocialsFields>;

export interface TypeTeamMemberFields {
  name?: Contentful.EntryFields.Symbol;
  role?: Contentful.EntryFields.Symbol;
  profilePicture?: Contentful.Asset;
  description?: Contentful.EntryFields.Text;
  socials?: Contentful.Entry<Record<string, any>>;
  slug?: Contentful.EntryFields.Symbol;
  order?: Contentful.EntryFields.Integer;
}

export type TypeTeamMember = Contentful.Entry<TypeTeamMemberFields>;