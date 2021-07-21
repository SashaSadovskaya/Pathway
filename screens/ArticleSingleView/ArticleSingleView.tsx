import React from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {styles} from './ArticleSingleViewStyles';

type ArticleSingleViewProps = {
  route: RouteProp<RootStackParamList, 'ArticleSingleView'>;
};

const ArticleSingleView = ({route}: ArticleSingleViewProps) => {
  const {title, date, content, thumbnail} = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title} testID="title">
            {title}
          </Text>
          <Text style={styles.date} testID="date">
            {date}
          </Text>
          <Image source={{uri: thumbnail}} style={styles.image} />
          <Text testID="content">{content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleSingleView;
