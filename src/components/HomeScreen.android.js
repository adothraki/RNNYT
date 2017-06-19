import React, {Component} from 'react';
import TabBar from 'react-native-xtabbar';
import {StyleSheet, View, Text,Alert} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import Search from './Search';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      tab: 'newsFeed'
    };
  }

  showBookmarkAlert(){
    Alert.alert(
      'Coming Soon!',
      "We're hard at work on this feature, check back in the near future.",
      [{text: 'OK', onPress: () => console.log('User pressed OK')}]
    );
  }

  render(){
    return (
      <TabBar style={{backgroundColor: globalStyles.BAR_COLOR}}>
        <TabBar.Item icon={require('../images/star_normal.png')} selectedIcon={require('../images/star_highlight.png')}
          onPress={() => this.setState({tab: 'newsFeed'})} title='Featured'>
          <NewsFeedContainer />
        </TabBar.Item>
        <TabBar.Item icon={require('../images/star_normal.png')} selectedIcon={require('../images/star_highlight.png')}
          onPress={() => this.setState({tab: 'search'})} title='Search'>
          <Search />
        </TabBar.Item>
        <TabBar.Item icon={require('../images/star_normal.png')} selectedIcon={require('../images/star_highlight.png')}
          onPress={() => this.showBookmarkAlert()} title='Bookmarks'>
          <Text>Bookmarks</Text>
        </TabBar.Item>
      </TabBar>
    );
  }
}
