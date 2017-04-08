import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Styles } from '../styles/styles';

export default class EscalatorHistoryList extends Component {
  componentWillUpdate() {
    console.log('history list will update');
  }

  componentDidUpdate() {
    console.log('history list did update');
  }

  componentWillReceiveProps() {
    console.log('history list will receive props');
  }

  render() {
    if (this.props.fetching || !this.props.history.length) {
      return (
        <ActivityIndicator animating={ true } size="large" />
      );
    } else {
      return (
        <ScrollView style={ Styles.escalatorList }>
          { this.props.history.map(
            (e) => {
              return <Text key={ "history-" + e.id }>{ e.event }</Text>;
            })
          }
        </ScrollView>
      );
    }
  }
}
