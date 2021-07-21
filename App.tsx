import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ArticleListView from './screens/ArticleListView/ArticleListView';
import ArticleSingleView from './screens/ArticleSingleView/ArticleSingleView';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ArticleListView" component={ArticleListView} />
        <Stack.Screen name="ArticleSingleView" component={ArticleSingleView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
