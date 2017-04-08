import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import { Styles } from '../styles/styles';

export default class CheckEx extends Component {
  render() {
    var symbol,
        style;

    if (this.props.on == true) {
      symbol = <Icon name="md-checkmark-circle" size={ 20 } style={{ color: 'green' }} />;
      style = Styles.checkexOn;
    } else {
      symbol = <Icon name="md-close-circle" size={ 20 } style={{ color: 'red' }} />;
      style = Styles.checkexOff;
    }

    return (
      <Text style={ style }>{ symbol }</Text>
    );
  }
}
