import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ArticleListView = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/191f13ed-8aca-44ed-8b51-cc4473e09471/API_Sample-1626790950108.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210721T112413Z&X-Amz-Expires=86400&X-Amz-Signature=44cb6a0383b1f84b514ab01dce2234f5cf55911cdd9183cff32cc5bfcaacc3a7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22API_Sample-1626790950108.json%22')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.posts[0].title);
      setTitle(data.posts[0].title);
    });
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ArticleSingleView');
            }}>
            <Text>single view</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleListView;
