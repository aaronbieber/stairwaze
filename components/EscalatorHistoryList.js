import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Styles } from '../styles/styles';

export default class EscalatorHistoryList extends Component {
  render() {
    if (this.props.fetching) {
      return (
        <ActivityIndicator animating={ true } size="large" />
      );
    } else {
      return (
        <ScrollView style={ Styles.escalatorList }>
          { this.props.escalator.map(
            (e) => {
              return <Text key={ "history-" + this.props.escalator.id + "-" + e.id }>{ e.event }</Text>;
            })
          }
        </ScrollView>
      );
    }
  }
}
