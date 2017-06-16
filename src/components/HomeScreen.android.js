import React, {Component} from 'react';
import TabBar from 'react-native-xtabbar';
import {StyleSheet, View, Text} from 'react-native';
import * as globalStyles from '../styles/global';
import NewsFeed from './NewsFeed';

export default class HomeScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      tab: 'newsFeed'
    };
  }

  render(){
    return (
      <TabBar style={{backgroundColor: globalStyles.BAR_COLOR}}>
        <TabBar.Item icon={require('../images/star_normal.png')} selectedIcon={require('../images/star_highlight.png')}
          onPress={() => this.setState({tab: 'newsFeed'})} title='Featured'>
          <NewsFeed />
        </TabBar.Item>
        <TabBar.Item icon={require('../images/star_normal.png')} selectedIcon={require('../images/star_highlight.png')}
          onPress={() => this.setState({tab: 'newsFeed'})} title='Search'>
          <Text>Search</Text>
        </TabBar.Item>
        <TabBar.Item icon={require('../images/star_normal.png')} selectedIcon={require('../images/star_highlight.png')}
          onPress={() => this.setState({tab: 'newsFeed'})} title='Bookmarks'>
          <Text>Bookmarks</Text>
        </TabBar.Item>
      </TabBar>
    );
  }
}
