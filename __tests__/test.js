import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import ArticleSingleView from '../screens/ArticleSingleView/ArticleSingleView';
import ArticleListView from '../screens/ArticleListView/ArticleListView';

jest.mock('@react-navigation/native');

describe('ArticleSingleView tests', () => {
  const title = 'test title';
  const date = 'test date';
  const content = 'test content';

  it('should display correct text', () => {
    const {getByTestId} = render(
      <ArticleSingleView
        route={{
          params: {
            title,
            date,
            content,
          },
        }}
      />,
    );

    const titleText = getByTestId('title').props.children;
    const dateText = getByTestId('date').props.children;
    const contentText = getByTestId('content').props.children;

    expect(titleText).toEqual(title);
    expect(dateText).toEqual(date);
    expect(contentText).toEqual(content);
  });

  it('should render correctly', () => {
    const component = render(
      <ArticleSingleView
        route={{
          params: {
            title,
            date,
            content,
          },
        }}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});

describe('ArticleListView tests', () => {
  it('should render correctly', () => {
    const component = render(<ArticleListView />);

    expect(component).toMatchSnapshot();
  });
});
