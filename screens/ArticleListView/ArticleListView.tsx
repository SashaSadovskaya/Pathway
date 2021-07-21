import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {styles} from './ArticleListViewStyles';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {fetchArticles} from '../../utils';
import {Article} from '../../types';

const ArticleListView = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetchArticles();

      setArticles(response);
    })();
  }, []);

  const renderItem = ({item}: {item: Article}) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.7}
        style={styles.titleContainer}
        onPress={() => {
          navigation.navigate('ArticleSingleView', {
            title: item.title,
            date: item.date,
            content: item.content,
            thumbnail: item.thumbnail,
          });
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.date}</Text>
        <Text>{item.excerpt}</Text>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default ArticleListView;
