import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import PropTypes from 'prop-types';
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends Component{

  constructor(props){
    super(props);
    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress(){
    Alert.alert(
      'Coming Soon!',
      "We're hard at work on this feature, check back in the near future.",
      [{text: 'OK', onPress: () => console.log('User pressed OK')}]
    );
  }

  render(){
    const {style, imageUrl, title, author, date, location, description, onPress} = this.props;
    const accentColor = globalStyles.ACCENT_COLORS[this.props.index % globalStyles.ACCENT_COLORS.length];
    return (
      <TouchableOpacity style={style} onPress={onPress} onLongPress={this.onLongPress}>
        <View>
          <Thumbnail url={imageUrl} titleText={title} accentColor={accentColor} style={styles.thumbnail} />
          <View style={styles.content}>
            <Byline author={author} date={date} location={location} />
            <AppText>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style
};

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
