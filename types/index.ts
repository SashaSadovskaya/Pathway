import {FEATURED_MEDIA_FIELD_NAME} from '../constants';

export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    [FEATURED_MEDIA_FIELD_NAME]: {source_url: string}[];
  };
};

export type Article = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  thumbnail: string;
};

export type RootStackParamList = {
  ArticleListView: undefined;
  ArticleSingleView: {
    title: string;
    date: string;
    content: string;
    thumbnail: string;
  };
};
