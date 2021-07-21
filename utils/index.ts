import {API, FEATURED_MEDIA_FIELD_NAME} from '../constants';
import {Post, Article} from '../types';

export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  if (!date || formattedDate === 'Invalid Date') {
    return date;
  }

  return formattedDate;
};

export const fetchArticles = async () => {
  const response = await fetch(API);
  const json = await response.json();
  const result: Article[] = json.map(
    ({title, id, date, excerpt, content, _embedded}: Post) => ({
      title: title.rendered,
      id,
      date: formatDate(date),
      excerpt: excerpt.rendered,
      content: content.rendered,
      thumbnail: _embedded[FEATURED_MEDIA_FIELD_NAME][0].source_url,
    }),
  );

  return result;
};
